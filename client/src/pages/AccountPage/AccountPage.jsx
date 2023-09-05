import GroupDetail from "components/group/GroupDetail/GroupDetail";
import * as S from "./AccountPage.style";
import AccountDetail from "components/account/AccountDetail/AccountDetail";

const AccountPage = () => {
  return (
    <S.AccountPageWrapper>
      <AccountDetail />
      <GroupDetail />
    </S.AccountPageWrapper>
  );
};
export default AccountPage;
