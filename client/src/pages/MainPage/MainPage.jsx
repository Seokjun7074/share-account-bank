import { useNavigate } from "react-router-dom";
import * as S from "./MainPage.style";
import GroupList from "components/group/GroupList/GroupList";
import { PATH } from "constants/path";
import { useGroupListQuery } from "hooks/apiHook/useGroupListQuery";
import { useAccountListQuery } from "hooks/apiHook/useAccountListQuery";
import AccountList from "components/account/AccountList/AccountList";
import Modal from "components/@common/Modal/Modal";
import useModal from "hooks/useModal";
import { useRecoilValue } from "recoil";
import { selectedMyAccountState } from "recoil/atoms";
import DepositModal from "components/account/DepositModal/DepositModal";
import { useEffect, useState } from "react";
import AccountItem from "components/account/AccountItem/AccountItem";

const MainPage = () => {
  const navigate = useNavigate();
  const { groupListData } = useGroupListQuery();
  const { accountListData } = useAccountListQuery();
  const { openModal, closeModal } = useModal("accountId");
  const selectedMyAccount = useRecoilValue(selectedMyAccountState);
  const [mainAccount, setMainAccount] = useState({});

  const findMainAccount = (responseData) => {
    const findedData = responseData?.filter((item) => item.representedAccount);
    return findedData;
  };

  useEffect(() => {
    setMainAccount(findMainAccount(accountListData.data)[0]);
  }, [accountListData]);

  return (
    <>
      <S.MainPageWrapper>
        <S.LabelWrapper>내 주 계좌</S.LabelWrapper>
        {mainAccount.accountId ? (
          <AccountItem
            key={mainAccount?.accountId}
            accountId={mainAccount?.accountId}
            balance={mainAccount?.balance}
            openModal={openModal}
          />
        ) : (
          <h1>X</h1>
        )}
        <S.LabelWrapper>내 계좌</S.LabelWrapper>
        <AccountList accountList={accountListData?.data} openModal={openModal} />
        <S.LabelWrapper>내 모임 계좌</S.LabelWrapper>
        <GroupList groupList={groupListData?.data} />
        <S.CreateGroupButton onClick={() => navigate(PATH.REGIST_GROUP_PAGE)}>+</S.CreateGroupButton>
      </S.MainPageWrapper>
      <Modal id="accountId">
        <DepositModal selectedMyAccount={selectedMyAccount} closeModal={closeModal} />
      </Modal>
    </>
  );
};
export default MainPage;
