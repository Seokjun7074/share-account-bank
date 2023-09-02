import * as S from "./DepositPage.style";

const DepositPage = () => {
  return (
    <S.DepositPageWrapper>
      <S.DepositMessage>가방을 클릭해 회비를 모아주세요!</S.DepositMessage>
      <S.DepositImageContainer>
        <S.DepositImage src={process.env.PUBLIC_URL + "/image/bag.png"} alt="logo" />
      </S.DepositImageContainer>
      <S.DepositButton>모임통장 보러가기</S.DepositButton>
    </S.DepositPageWrapper>
  );
};

export default DepositPage;
