import { useParams } from "react-router-dom";
import { useAccountQuery } from "hooks/apiHook/useAccountQuery";
import * as S from "./AccountPage.style";
import Receipt from "components/@common/Receipt/Receipt";

const AccountPage = () => {
  const { accountNumber } = useParams();
  const { accountData } = useAccountQuery(accountNumber);

  return (
    <S.AccountPageWrapper>
      <Receipt accountData={accountData?.data} />
    </S.AccountPageWrapper>
  );
};
export default AccountPage;
