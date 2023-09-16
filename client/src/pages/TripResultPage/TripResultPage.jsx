import { useNavigate, useParams } from "react-router-dom";
import Receipt from "components/@common/Receipt/Receipt";
import { useFinishTravelQuery } from "hooks/apiHook/useFinishTravelQuery";
import * as S from "pages/TripResultPage/TripResultPage.style";
import { setMoneyRegex } from "utils/regex";
import { PATH } from "constants/path";

const TripResultPage = () => {
  const navigate = useNavigate();
  const { groupId } = useParams();
  const { finishTravelData } = useFinishTravelQuery(groupId);

  const newFinishTravelData = {
    accountNumber: finishTravelData?.group.account,
    balance: finishTravelData?.group.balance,
    goal: finishTravelData?.group.goal,
    startDate: finishTravelData?.group.startDate,
    limitMember: finishTravelData?.group.limitMember,
    historyList: [...finishTravelData?.historyList],
    participants: [...finishTravelData?.group.participants],
  };

  const handleNavigation = () => {
    const sendData = {
      balance: newFinishTravelData.balance,
      participants: newFinishTravelData.participants,
    };
    navigate(PATH.CALCULATION_PAGE(groupId), {
      state: sendData,
    });
  };

  return (
    <S.TripResultPageWrapper>
      <Receipt accountData={newFinishTravelData}>
        <S.groupInfoContainer>
          <span>목표금액</span>
          <span>{setMoneyRegex(newFinishTravelData?.goal)}원</span>
        </S.groupInfoContainer>
        <S.groupInfoContainer>
          <span>참여인원</span>
          <span>{newFinishTravelData?.limitMember}명</span>
        </S.groupInfoContainer>
      </Receipt>
      <S.TripCalculationButton onClick={handleNavigation}>정산하기</S.TripCalculationButton>
    </S.TripResultPageWrapper>
  );
};

export default TripResultPage;
