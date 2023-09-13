import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
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
  const { groupListData } = useGroupListQuery();
  const { accountListData } = useAccountListQuery();
  const { openModal: openDepositModal, closeModal: closeDepositModal } = useModal("deposit");
  const selectedMyAccount = useRecoilValue(selectedMyAccountState);
  const [sortesAccountList, setSortedAccountList] = useState([]);
  const [accountToggle, setAccountToggle] = useState(true);

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

  useEffect(() => {
    const sortedArr = sortByRepresentedAccount(accountListData?.data.accountList).filter((item) => !item.group);
    setSortedAccountList(sortedArr);
  }, [accountListData]);

  return (
    <>
      <S.MainPageWrapper>
        <S.LabelWrapper>
          <span>{accountToggle ? "내 계좌" : "내 모임 계좌"}</span>
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
