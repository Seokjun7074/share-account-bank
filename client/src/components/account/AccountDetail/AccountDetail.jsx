import ProgressBar from "components/@common/ProgressBar/ProgressBar";
import * as S from "./AccountDetail.style";

const AccountDetail = () => {
  return (
    <S.AccountDetailWrapper>
      <S.InfoContainer>
        <S.Name>계좌 이름</S.Name>
        <S.Number>110-123-123456</S.Number>
      </S.InfoContainer>
      <S.MoneyContainer>
        <S.Money>100,000</S.Money>
        <select name="국가">
          <option value="USD">USD</option>
          <option value="KOW">KOW</option>
          <option value="JPY">JPY</option>
        </select>
      </S.MoneyContainer>
      <ProgressBar goalMoney={1000} currentMoney={600} />
      <S.AccountButtonContainer>
        <S.AccountButton>여행가기</S.AccountButton>
        <S.AccountButton>환전 우대율 조회</S.AccountButton>
      </S.AccountButtonContainer>
    </S.AccountDetailWrapper>
  );
};

export default AccountDetail;
