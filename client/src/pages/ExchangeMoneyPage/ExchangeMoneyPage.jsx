import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MdAirplanemodeActive } from "react-icons/md";
import useInput from "hooks/useInput";
import * as S from "./ExchangeMoneyPage.style";
import { moneyName } from "constants/money";
import { useEmailVerificationMutation } from "hooks/apiHook/useEmailMutation";
import EmailModal from "components/user/EmailModal/EmailModal";
import businessAPI from "apis/business";
import shinhanAPI from "apis/shinhan";
import { setMoneyRegex } from "utils/regex";
import useModal from "hooks/useModal";
import Modal from "components/@common/Modal/Modal";
import PasswordVerifyModal from "components/account/PasswordVerifyModal/PasswordVerifyModal";

const ExchangeMoneyPage = () => {
  const { groupId } = useParams();
  const verificationMutation = useEmailVerificationMutation();
  const [account, setAccount] = useState("");
  const [exchangeAmount, setExchangeAmount, exchangeAmountHandler] = useInput("");
  const [showModal, setShowModal] = useState(false);
  const [flag, setFlag] = useState("");
  const [balance, setBalance] = useState("");
  const [resultAmount, setResultAmount] = useState("예상환전금액");
  const { openModal, closeModal } = useModal("checkPassword");

  useEffect(() => {
    const groupAccountInfo = async () => {
      try {
        const { data } = await businessAPI.getGroup(groupId);
        setAccount(data.account);
        setBalance(data.balance);
      } catch {}
    };
    groupAccountInfo();
  }, []);

  const sendAccountVerification = () => {
    setShowModal(true);
  };
  const verifyAccountCode = (code) => {
    verificationMutation.mutate({ code });
  };

  const handleFlag = (event) => {
    setFlag(moneyName[event.target.value]);
    exchangeMoney(moneyName[event.target.value]);
  };
  const inputAllMoney = () => {
    setExchangeAmount(balance);
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
          환전금액: exchangeAmount.toString(),
          거래자성명: "홍길동",
          생년월일: "19930222",
          휴대폰번호: "0101111111",
        },
      };
      const response = await shinhanAPI.getExpectedMoney(requestData);
      setResultAmount(Math.floor(exchangeAmount / (Number(response.data.dataBody.원화예상금액) / exchangeAmount)));
    } catch {}
  };

  return (
    <S.SignUpPageWrapper>
      <S.SignUpText>환전 신청</S.SignUpText>
      <S.InputWrapper>
        <S.ValidateAccountContiner>
          <S.InputBox disabled placeholder="계좌번호" type="email" value={account} />
          <span>출금 계좌</span>
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
      <S.NextButton onClick={openModal}>환전 신청 지점 찾기</S.NextButton>
      <Modal id="checkPassword">
        <PasswordVerifyModal closeModal={closeModal} />
      </Modal>
    </S.SignUpPageWrapper>
  );
};
export default ExchangeMoneyPage;
