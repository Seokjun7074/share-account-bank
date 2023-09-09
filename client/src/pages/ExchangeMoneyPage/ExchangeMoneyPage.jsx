import { useState, useEffect } from "react";
import useInput from "hooks/useInput";
import { useLocation } from "react-router-dom";
import * as S from "./ExchangeMoneyPage.style";
import { moneyName } from "constants/money";
import { useEmailVerificationMutation, useEmailSendMutation } from "hooks/apiHook/useEmailMutation";
import EmailModal from "components/user/EmailModal/EmailModal";
import { MdAirplanemodeActive } from "react-icons/md";
import businessAPI from "apis/business";
import shinhanAPI from "apis/shinhan";
import { setMoneyRegex } from "utils/regex";

const ExchangeMoneyPage = () => {
  const groupId = useLocation().pathname.split("/exchange/")[1];
  const [account, setAccount] = useState("");
  const [exchangeAmount, setExchangeAmount, exchangeAmountHandler] = useInput("");
  const verificationMutation = useEmailVerificationMutation();
  const [showModal, setShowModal] = useState(false);
  const [flag, setFlag] = useState("");
  const [balance, setBalance] = useState();
  const [resultAmount, setResultAmount] = useState("예상환전금액");

  useEffect(() => {
    const groupAccountInfo = async () => {
      try {
        const response = await businessAPI.getGroup(groupId);
        console.log(response);
        setAccount(response.data.account);
        setBalance(response.data.balance);
      } catch {}
    };
    groupAccountInfo();
  }, []);

  const sendAccountVerification = () => {
    setShowModal(true);
  };
  const verifyAccountCode = (code) => {
    verificationMutation.mutate({ code: code });
  };
  //-------------------------------
  const handleFlag = (event) => {
    setFlag(moneyName[event.target.value]);
    exchangeMoney(moneyName[event.target.value]);
  };
  const inputAllMoney = () => {
    setExchangeAmount(balance);
  };

  const exchangeMoney = async (bill) => {
    try {
      const request = {
        dataHeader: {
          apikey: "2023_Shinhan_SSAFY_Hackathon",
        },
        dataBody: {
          serviceCode: "T0505",
          환전통화: bill,
          환전금액: exchangeAmount.toString(),
          거래자성명: "홍길동",
          생년월일: "19930222",
          휴대폰번호: "0101111111",
        },
      };
      const response = await shinhanAPI.getExpectedMoney(request);
      console.log(exchangeAmount / Number(response.data.dataBody.원화예상금액) / exchangeAmount);
      setResultAmount(Math.floor(exchangeAmount / (Number(response.data.dataBody.원화예상금액) / exchangeAmount)));
    } catch {}
  };

  return (
    <S.SignUpPageWrapper>
      <S.SignUpText>환전 신청</S.SignUpText>
      <S.InputWrapper>
        <S.ValidateAccountContiner>
          <S.InputBox disabled placeholder="계좌번호" type="email" value={account} />
          <S.ValidateAccountButton onClick={sendAccountVerification}>인증</S.ValidateAccountButton>
        </S.ValidateAccountContiner>
        <S.MoneyContainer>
          <S.InputBox
            placeholder="환전금액"
            type="text"
            value={setMoneyRegex(exchangeAmount)}
            onChange={exchangeAmountHandler}
          />
          <S.InputAllMoneyButton onClick={inputAllMoney}>전액</S.InputAllMoneyButton>
        </S.MoneyContainer>
        <S.SelectAccountBox>
          <S.InputBox disabled placeholder="예상환전금액" value={setMoneyRegex(resultAmount)} />
          <S.FlagContainer>
            {!flag ? (
              <MdAirplanemodeActive size={"2rem"} />
            ) : (
              <S.CountryFlagImage src={process.env.PUBLIC_URL + `/flag/${flag}.png`} />
            )}
            <select onChange={handleFlag} name="money">
              <option defaultValue={null}>화폐선택</option>
              {Object.keys(moneyName).map((money) => (
                <option key={money} value={money}>
                  {moneyName[money]}
                </option>
              ))}
            </select>
          </S.FlagContainer>
        </S.SelectAccountBox>
      </S.InputWrapper>

      <S.NextButton>신청</S.NextButton>
      <S.ModalOverlay $show={showModal} onClick={() => setShowModal(false)} />
      <S.ModalContainer $show={showModal}>
        <EmailModal
          onClose={() => setShowModal(false)}
          onVerify={(code) => {
            verifyAccountCode(code);
          }}
        />
      </S.ModalContainer>
    </S.SignUpPageWrapper>
  );
};
export default ExchangeMoneyPage;
