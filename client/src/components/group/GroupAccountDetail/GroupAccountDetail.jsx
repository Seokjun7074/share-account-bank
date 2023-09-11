import { useNavigate, useParams } from "react-router-dom";
import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import * as S from "./GroupAccountDetail.style";
import { setMoneyRegex } from "utils/regex";
import { useStratTravelMutation } from "hooks/apiHook/useStratTravelMutation";
import { PATH } from "constants/path";
import { useEffect, useState } from "react";
import { theme } from "styles/theme";

const GroupAccountDetail = ({ groupName, account, goal, balance }) => {
  const navigate = useNavigate();
  const { groupId } = useParams();
  const stratTravelMutation = useStratTravelMutation(groupId);
  const [percentage, setPercentage] = useState(0);

  const handelStartTravel = () => {
    stratTravelMutation.mutate();
  };

  useEffect(() => {
    setPercentage((balance / goal) * 100);
  }, [goal, balance]);

  const progressStyle = buildStyles({
    strokeLinecap: "round",
    pathTransitionDuration: 1,
    pathColor: `${theme.color.green}`,
    // trailColor: "#d6d6d6",
  });

  return (
    <S.GroupAccountDetailWrapper>
      <S.InfoContainer>
        <S.Name>{groupName}</S.Name>
        <S.Number>{account}</S.Number>
      </S.InfoContainer>
      <S.ProgressBarContainer>
        <CircularProgressbarWithChildren value={percentage} styles={progressStyle}>
          <h1>{percentage}%</h1>
        </CircularProgressbarWithChildren>
      </S.ProgressBarContainer>
      <S.MoneyContainer>
        <S.Money>{setMoneyRegex(balance)}원</S.Money>
        <select name="국가">
          <option value="KOW">KOW</option>
          <option value="USD">USD</option>
          <option value="JPY">JPY</option>
        </select>
      </S.MoneyContainer>
      <S.GroupAccountButtonContainer>
        <S.GroupAccountButton onClick={handelStartTravel}>여행가기</S.GroupAccountButton>
        <S.GroupAccountButton onClick={() => navigate(PATH.EXCHANGE_PAGE(groupId))}>환전하기</S.GroupAccountButton>
      </S.GroupAccountButtonContainer>
    </S.GroupAccountDetailWrapper>
  );
};

export default GroupAccountDetail;
