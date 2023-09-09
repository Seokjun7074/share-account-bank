import { useLocation } from "react-router-dom";
import * as S from "./TravelInfoPage.style";

const TravelInfoPage = () => {
  const { state } = useLocation();
  const group = state?.group;

  return (
    <S.TravelInfoPageWrapper>
      <S.TravelInfoImageContainer>
        <S.TravelInfoImage src={process.env.PUBLIC_URL + "/image/airplane.png"} alt="logo" />
      </S.TravelInfoImageContainer>
      <S.MessageWrapper>
        <S.TravelInfoMessage>목표 금액 {(group.balance / group.goal) * 100}% 달성!</S.TravelInfoMessage>
        <S.TravelInfoText>설레는 여행이 다가와요!</S.TravelInfoText>
      </S.MessageWrapper>
      <S.TravelInfoButton>모임통장 관리하기</S.TravelInfoButton>
    </S.TravelInfoPageWrapper>
  );
};

export default TravelInfoPage;
