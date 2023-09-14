import { useNavigate, useParams } from "react-router-dom";
import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { MdAirplanemodeActive } from "react-icons/md";
import * as S from "./GroupAccountDetail.style";
import { setMoneyRegex } from "utils/regex";
import { useStratTravelMutation } from "hooks/apiHook/useStratTravelMutation";
import { PATH } from "constants/path";
import { useEffect, useState } from "react";
import { theme } from "styles/theme";
import { moneyName } from "constants/money";
import shinhanAPI from "apis/shinhan";

const GroupAccountDetail = ({ groupName, account, goal, balance }) => {
  const navigate = useNavigate();
  const { groupId } = useParams();
  const stratTravelMutation = useStratTravelMutation(groupId);
  const [percentage, setPercentage] = useState(0);
  const [resultAmount, setResultAmount] = useState("");
  const [flag, setFlag] = useState("KOW");

  const handelStartTravel = () => {
    stratTravelMutation.mutate();
  };
  const handleFlag = (event) => {
    if (event.target.value === "KOW") {
      setFlag("KOW");
      return;
    }
    setFlag(moneyName[event.target.value]);
    exchangeMoney(moneyName[event.target.value]);
  };

  const exchangeMoney = async (bill) => {
    try {
      const requestData = {
        dataHeader: {
          apikey: "2023_Shinhan_SSAFY_Hackathon",
        },
        dataBody: {
          serviceCode: "T0505",
          환전통화: bill,
          환전금액: balance.toString(),
          거래자성명: "홍길동",
          생년월일: "19930222",
          휴대폰번호: "0101111111",
        },
      };
      const response = await shinhanAPI.getExpectedMoney(requestData);
      setResultAmount(Math.floor(balance / (Number(response.data.dataBody.원화예상금액) / balance)));
    } catch {}
  };

  useEffect(() => {
    setPercentage((balance / goal) * 100);
  }, [goal, balance]);

  const progressStyle = buildStyles({
    strokeLinecap: "round",
    pathTransitionDuration: 1,
    pathColor: `${theme.color.green}`,
  });

  return (
    <S.GroupAccountDetailWrapper>
      <S.InfoContainer>
        <S.Name>
          <S.LogoImg src={process.env.PUBLIC_URL + "/image/shinhanlogo.png"} alt="Shinhan Logo" />
          {groupName}
        </S.Name>
        <S.Number>{account}</S.Number>
      </S.InfoContainer>
      <S.ProgressBarContainer>
        <CircularProgressbarWithChildren value={percentage} styles={progressStyle}>
          <h1>{percentage}%</h1>
        </CircularProgressbarWithChildren>
      </S.ProgressBarContainer>
      <S.MoneyContainer>
        {flag === "KOW" ? (
          <S.Money>{setMoneyRegex(balance)}원</S.Money>
        ) : (
          <S.Money>{setMoneyRegex(resultAmount)}</S.Money>
        )}
        <select onChange={handleFlag} name="money">
          <option value="KOW">KOW</option>
          {Object.keys(moneyName).map((money) => (
            <option key={money} value={money}>
              {moneyName[money]}
            </option>
          ))}
        </select>
        {/* <select name="국가">
          <option value="KOW">KOW</option>
          <option value="USD">USD</option>
          <option value="JPY">JPY</option>
        </select> */}
      </S.MoneyContainer>
      <S.GroupAccountButtonContainer>
        <S.GroupAccountButton onClick={handelStartTravel}>여행가기</S.GroupAccountButton>
        <S.GroupAccountButton onClick={() => navigate(PATH.EXCHANGE_PAGE(groupId))}>환전하기</S.GroupAccountButton>
      </S.GroupAccountButtonContainer>
    </S.GroupAccountDetailWrapper>
  );
};

export default GroupAccountDetail;
