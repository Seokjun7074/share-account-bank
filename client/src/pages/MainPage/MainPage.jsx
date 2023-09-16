import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { MdAddCard, MdOutlineAirplaneTicket } from "react-icons/md";
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

const MainPage = () => {
  const navigate = useNavigate();
  const { groupListData } = useGroupListQuery();
  const { accountListData } = useAccountListQuery();
  const { openModal: openDepositModal, closeModal: closeDepositModal } = useModal("deposit");
  const selectedMyAccount = useRecoilValue(selectedMyAccountState);
  const [sortesAccountList, setSortedAccountList] = useState([]);

  const sortByRepresentedAccount = (arr) => {
    return arr.sort((a, b) => {
      if (a.represented && !b.represented) return -1;
      else if (!a.represented && b.represented) return 1;
      else return 0;
    });
  };

  useEffect(() => {
    const sortedArr = sortByRepresentedAccount(accountListData?.data.accountList).filter((item) => !item.group);
    setSortedAccountList(sortedArr);
  }, [accountListData]);
  const navigateNewAccount = () => navigate(PATH.CREATE_ACCOUNT_PAGE);
  const navigateNewGroup = () => navigate(PATH.REGIST_GROUP_PAGE);

  return (
    <>
      <S.MainPageWrapper>
        <S.AccountInfoContainer>
          <S.LabelWrapper>
            <S.IconContainer>
              <MdAddCard />
              <span>내 계좌</span>
            </S.IconContainer>
            <S.ChangeButton onClick={() => navigate(PATH.CREATE_ACCOUNT_PAGE)}>계좌 개설</S.ChangeButton>
          </S.LabelWrapper>
          <AccountList
            accountList={sortesAccountList}
            openModal={openDepositModal}
            navigateNewAccount={navigateNewAccount}
          />
        </S.AccountInfoContainer>
        <S.AccountInfoContainer>
          <S.LabelWrapper>
            <S.IconContainer>
              <MdOutlineAirplaneTicket />
              <span>내 모임 계좌</span>
            </S.IconContainer>
            <S.ChangeButton onClick={() => navigate(PATH.REGIST_GROUP_PAGE)}>모임 생성</S.ChangeButton>
          </S.LabelWrapper>
          <GroupList groupList={groupListData?.data} navigateNewGroup={navigateNewGroup} />
        </S.AccountInfoContainer>
      </S.MainPageWrapper>

      <Modal id="deposit">
        <DepositModal selectedMyAccount={selectedMyAccount} closeModal={closeDepositModal} />
      </Modal>
    </>
  );
};
export default MainPage;
