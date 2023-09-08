import LabelInput from "components/@common/LabelInput/LabelInput";
import * as S from "components/account/DepositModal/DepositModal.style";
import { useTransactionMutation } from "hooks/apiHook/useTransactionMutation";
import useInput from "hooks/useInput";
import { useState } from "react";
import { replaceComma, setAccountRegex, setMoneyRegex } from "utils/regex";

const DepositModal = ({ selectedMyAccount, closeModal }) => {
  const transactMutation = useTransactionMutation();
  const [targetAccount, setTargetAccount, targetAccountHandler] = useInput("");
  const [money, setMoney] = useState("");

  const handleTranscation = () => {
    const requestData = {
      sender: selectedMyAccount,
      receiver: targetAccount,
      amount: replaceComma(money),
    };
    transactMutation.mutate({ ...requestData });
  };
  const handleMoney = (event) => {
    const formattedMoney = setMoneyRegex(event.target.value);
    setMoney(formattedMoney);
  };

  return (
    <S.DepositModalWrapper>
      <S.CreateAccountModalTitle>이체</S.CreateAccountModalTitle>
      <LabelInput
        labelTitle="송금 계좌"
        inputType="text"
        handler={targetAccountHandler}
        option={{
          value: setAccountRegex(targetAccount),
          maxLength: 14,
        }}
      />
      <LabelInput
        labelTitle="금액"
        inputType="text"
        handler={handleMoney}
        option={{
          min: 1,
          value: money,
        }}
      />
      <S.ButtonContainer>
        <S.CancelButton onClick={closeModal}>취소</S.CancelButton>
        <S.CreateButton onClick={handleTranscation}>송금</S.CreateButton>
      </S.ButtonContainer>
    </S.DepositModalWrapper>
  );
};
export default DepositModal;

// 예금주 실명 조회
