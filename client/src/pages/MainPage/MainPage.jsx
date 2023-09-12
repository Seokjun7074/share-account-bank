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
    console.log(accountListData?.data.accountList);
    const sortedArr = sortByRepresentedAccount(accountListData?.data.accountList);
    console.log(sortedArr);
    setSortedAccountList(sortedArr);
  }, [accountListData]);

  return (
    <>
      <button onClick={handleToggle}>@</button>
      <S.MainPageWrapper>
        {accountToggle ? (
          <>
            <S.LabelWrapper>내 계좌</S.LabelWrapper>
            <AccountList accountList={sortesAccountList} openModal={openDepositModal} />
          </>
        ) : (
          <>
            <S.LabelWrapper>내 모임 계좌</S.LabelWrapper>
            <GroupList groupList={groupListData?.data} />
          </>
        )}
        <S.CreateGroupButton onClick={() => navigate(PATH.REGIST_GROUP_PAGE)}>+</S.CreateGroupButton>
      </S.MainPageWrapper>
      <Modal id="deposit">
        <DepositModal selectedMyAccount={selectedMyAccount} closeModal={closeDepositModal} />
      </Modal>
    </>
  );
};
export default MainPage;
