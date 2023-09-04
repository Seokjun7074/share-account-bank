import * as S from "./RegistAccountPage.style";

const RegistAccountPage = () => {
  return (
    <S.RegistAccountPageWrapper>
      <S.RegistAccountText>모임통장 만들기</S.RegistAccountText>
      <S.InputWrapper>
        <S.InputBox placeholder="모임 이름" type="text" />
        <S.InputBox placeholder="계좌" type="email" />
        <S.InputBox placeholder="목표금액" type="text" />
        <div>여행예정일</div>
        <S.InputBox placeholder="여행예정일" type="date" />
        <S.InputBox placeholder="참여인원" type="number" />
      </S.InputWrapper>
      <S.NextButton>다음</S.NextButton>
    </S.RegistAccountPageWrapper>
  );
};
export default RegistAccountPage;
