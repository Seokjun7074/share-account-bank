import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./TravelInfoPage.style";
import { PATH } from "constants/path";

const TravelInfoPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const group = state?.group;

  const handleNavigate = () => {
    navigate(PATH.GROUP_PAGE(group.groupId));
  };

  return (
    <S.TravelInfoPageWrapper>
      <S.TravelInfoImageContainer>
        <S.TravelInfoImage src={process.env.PUBLIC_URL + "/image/airplane.png"} alt="logo" />
      </S.TravelInfoImageContainer>
      <S.MessageWrapper>
        <S.TravelInfoMessage>목표 금액 {Math.round((group.balance / group.goal) * 100)}% 달성!</S.TravelInfoMessage>
        <S.TravelInfoText>설레는 여행이 다가와요!</S.TravelInfoText>
      </S.MessageWrapper>
      <S.TravelInfoButton onClick={handleNavigate}>모임통장 관리하기</S.TravelInfoButton>
    </S.TravelInfoPageWrapper>
  );
};

export default TravelInfoPage;
