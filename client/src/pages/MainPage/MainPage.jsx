import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { MdAddCard, MdReduceCapacity } from "react-icons/md";
import * as S from "./MainPage.style";
import GroupList from "components/group/GroupList/GroupList";
import AccountList from "components/account/AccountList/AccountList";
import Modal from "components/@common/Modal/Modal";
import useModal from "hooks/useModal";
import { PATH } from "constants/path";
import { useGroupListQuery } from "hooks/apiHook/useGroupListQuery";
import { useAccountListQuery } from "hooks/apiHook/useAccountListQuery";
import { selectedMyAccountState } from "recoil/atoms";
import DepositModal from "components/account/DepositModal/DepositModal";
import { toastError, toastSuccess } from "utils/toast";
import { ToastContainer } from "react-toastify";

const MainPage = () => {
  const navigate = useNavigate();
  // const { groupListData } = useGroupListQuery();
  // const { accountListData } = useAccountListQuery();
  const { openModal: openDepositModal, closeModal: closeDepositModal } = useModal("deposit");
  const selectedMyAccount = useRecoilValue(selectedMyAccountState);
  // const [sortesAccountList, setSortedAccountList] = useState([]);
  const [accountToggle, setAccountToggle] = useState(true);

  const sortesAccountList = [
    {
      accountId: "110-123-123456",
      groupId: 12,
      isGroup: false,
      balance: 10000,
      represented: true,
    },
    {
      accountId: "110-123-123456",
      groupId: 12,
      isGroup: false,
      balance: 10000,
      represented: true,
    },
  ];
  const groupListData = {
    data: [
      {
        groupId: 12, // 그룹 PK
        groupName: "mygroup", // 그룹 이름
        account: "110-111-123456", // 계좌 번호
        goal: 1000000, // 목표 금액
        balance: 300000, // 잔고
        dues: 50000, // 월 회비
        duesDate: 4, // 자동 이체를 할 날짜
        startDate: "2023-09-12", // 여행을 출발할 날짜
        member: 3, // 현재 참여 인원
        money: "yen", // yen, yuan, dollar, euro, en ...
        isPaid: false, // 내가 회비 냈는지 여부
        isTravel: false, // 여행 중 인지 아닌지
      },
      {
        groupId: 12, // 그룹 PK
        groupName: "mygroup", // 그룹 이름
        account: "110-111-123456", // 계좌 번호
        goal: 1000000, // 목표 금액
        balance: 300000, // 잔고
        dues: 50000, // 월 회비
        duesDate: 4, // 자동 이체를 할 날짜
        startDate: "2023-09-12", // 여행을 출발할 날짜
        member: 3, // 현재 참여 인원
        money: "yen", // yen, yuan, dollar, euro, en ...
        isPaid: false, // 내가 회비 냈는지 여부
        isTravel: false, // 여행 중 인지 아닌지
      },
    ],
  };

  const sortByRepresentedAccount = (arr) => {
    return arr.sort((a, b) => {
      if (a.represented && !b.represented) return -1;
      else if (!a.represented && b.represented) return 1;
      else return 0;
    });
  };

  const handleToggle = () => {
    setAccountToggle(!accountToggle);
  };

  // useEffect(() => {
  //   const sortedArr = sortByRepresentedAccount(accountListData?.data.accountList).filter((item) => !item.group);
  //   setSortedAccountList(sortedArr);
  // }, [accountListData]);

  return (
    <>
      <S.MainPageWrapper>
        <S.LabelWrapper>
          <S.IconContainer>
            <span>{accountToggle ? "내 계좌" : "내 모임 계좌"}</span>
            {accountToggle ? (
              <MdAddCard onClick={() => navigate(PATH.CREATE_ACCOUNT_PAGE)} />
            ) : (
              <MdReduceCapacity onClick={() => navigate(PATH.REGIST_GROUP_PAGE)} />
            )}
          </S.IconContainer>
          <S.ChangeButton onClick={handleToggle}>{accountToggle ? "모임계좌 보기" : "내 계좌 보기"}</S.ChangeButton>
        </S.LabelWrapper>
        {accountToggle ? (
          <AccountList accountList={sortesAccountList} openModal={openDepositModal} />
        ) : (
          <GroupList groupList={groupListData?.data} />
        )}
        {/* <S.CreateGroupButton onClick={() => navigate(PATH.REGIST_GROUP_PAGE)}>그룹 생성</S.CreateGroupButton> */}
        {/* <S.CreateGroupButton onClick={() => navigate(PATH.CREATE_ACCOUNT_PAGE)}>계좌 생성</S.CreateGroupButton> */}
      </S.MainPageWrapper>
      <Modal id="deposit">
        <DepositModal selectedMyAccount={selectedMyAccount} closeModal={closeDepositModal} />
      </Modal>
    </>
  );
};
export default MainPage;
