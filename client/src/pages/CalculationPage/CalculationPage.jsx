import { useCalculationMutation } from "hooks/apiHook/useCalculationMutation";
import * as S from "./CalculationPage.style";
import { useParams } from "react-router-dom";

const CalculationPage = () => {
  const { groupId } = useParams();
  const calculationMutation = useCalculationMutation(groupId);

  const handleCalulation = () => {
    calculationMutation.mutate();
  };

  return (
    <S.CalculationPageWrapper>
      <S.CalculationMessage>남은 여비를 정산해주세요!</S.CalculationMessage>
      <S.CalculationImageContainer onClick={handleCalulation}>
        <S.CalculationImage src={process.env.PUBLIC_URL + "/image/phone.png"} alt="logo" />
      </S.CalculationImageContainer>
      <S.CalculationInfoText>클릭해서 정산 요청하기</S.CalculationInfoText>
      <S.CalculationButton>확인</S.CalculationButton>
    </S.CalculationPageWrapper>
  );
};

export default CalculationPage;
