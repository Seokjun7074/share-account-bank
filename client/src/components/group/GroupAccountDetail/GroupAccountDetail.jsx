import ProgressBar from "components/@common/ProgressBar/ProgressBar";
import * as S from "./GroupAccountDetail.style";
import { setMoneyRegex } from "utils/regex";
import { useStratTravelMutation } from "hooks/apiHook/useStratTravelMutation";
import { useNavigate, useParams } from "react-router-dom";
import { PATH } from "constants/path";

const GroupAccountDetail = ({ groupName, account, goal, balance, money }) => {
  const navigate = useNavigate();
  const { groupId } = useParams();
  const stratTravelMutation = useStratTravelMutation(groupId);

  const handelStartTravel = () => {
    stratTravelMutation.mutate();
  };

  return (
    <S.GroupAccountDetailWrapper>
      <S.InfoContainer>
        <S.Name>{groupName}</S.Name>
        <S.Number>{account}</S.Number>
      </S.InfoContainer>
      <S.MoneyContainer>
        <S.Money>{setMoneyRegex(balance)}원</S.Money>
        <select name="국가">
          <option value="USD">USD</option>
          <option value="KOW">KOW</option>
          <option value="JPY">JPY</option>
        </select>
      </S.MoneyContainer>
      <ProgressBar goalMoney={goal} currentMoney={balance} />
      <S.GroupAccountButtonContainer>
        <S.GroupAccountButton onClick={handelStartTravel}>여행가기</S.GroupAccountButton>
        <S.GroupAccountButton onClick={() => navigate(PATH.EXCHANGE_PAGE(groupId))}>
          환전 우대율 조회
        </S.GroupAccountButton>
      </S.GroupAccountButtonContainer>
    </S.GroupAccountDetailWrapper>
  );
};

export default GroupAccountDetail;
