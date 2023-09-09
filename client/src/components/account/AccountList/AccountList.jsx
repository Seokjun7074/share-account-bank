import AccountItem from "components/account/AccountItem/AccountItem";
import * as S from "components/account/AccountList/AccountList.style";
import { useEffect, useState } from "react";

const AccountList = ({ accountList, openModal }) => {
  const [filteredAccount, setFilteredAccount] = useState();

  useEffect(() => {
    const newData = accountList.filter((item) => !item.representedAccount);
    setFilteredAccount(newData);
  }, [accountList]);

  return (
    <S.AccountListWrapper>
      {filteredAccount.map((group) => (
        <AccountItem key={group.accountId} accountId={group.accountId} balance={group.balance} openModal={openModal} />
      ))}
    </S.AccountListWrapper>
  );
};

export default AccountList;
