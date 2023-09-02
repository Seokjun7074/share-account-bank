import GroupDetail from "components/GroupDetail/GroupDetail";
import * as S from "./AccountPage.style";
import AccountDetail from "components/AccountDetail/AccountDetail";

const AccountPage = () => {
  return (
    <S.AccountPageWrapper>
      <AccountDetail />
      <GroupDetail />
    </S.AccountPageWrapper>
  );
};
export default AccountPage;
