import { useParams } from "react-router-dom";
import { useAccountQuery } from "hooks/apiHook/useAccountQuery";
import * as S from "./AccountPage.style";

const AccountPage = () => {
  const { accountNumber } = useParams();
  const { accountData } = useAccountQuery(accountNumber);

  return <S.AccountPageWrapper>거래내역</S.AccountPageWrapper>;
};
export default AccountPage;
