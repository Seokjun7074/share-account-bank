import { useQueryClient } from "@tanstack/react-query";
import LabelInput from "components/@common/LabelInput/LabelInput";
import * as S from "components/account/DepositModal/DepositModal.style";
import { useAccountHostMutation } from "hooks/apiHook/useAccountHostMutation";
import { useCheckAccountPasswordMutation } from "hooks/apiHook/useCheckAccountPasswordMutation";
import { useTransactionMutation } from "hooks/apiHook/useTransactionMutation";
import useInput from "hooks/useInput";
import { useState } from "react";
import { replaceComma, setAccountRegex, setMoneyRegex } from "utils/regex";

const DepositModal = ({ selectedMyAccount, closeModal }) => {
  const queryClient = useQueryClient();
  const transactMutation = useTransactionMutation();
  const accoutnMutation = useAccountHostMutation();
  const checkAccountPasswordMutation = useCheckAccountPasswordMutation();
  const [targetAccount, setTargetAccount, targetAccountHandler] = useInput("");
  const [password, setPassword, passwordHandler] = useInput("");
  const [money, setMoney] = useState("");
  const [host, setHost] = useState("");
  const [step, setStep] = useState(1);

  const handleCheckPassword = () => {
    checkAccountPasswordMutation.mutate(
      { account: selectedMyAccount, password },
      {
        onSuccess: () => handleTranscation(),
        onError: () => {
          alert("비밀번호가 다릅니다!");
          closeModal();
        },
      },
    );
  };

  const handleTranscation = () => {
    const requestData = {
      sender: selectedMyAccount,
      receiver: targetAccount,
      amount: replaceComma(money),
    };
    transactMutation.mutate(
      { ...requestData },
      {
        onSuccess: () => {
          alert("송금완료!");
          closeModal();
          queryClient.invalidateQueries({ queryKey: ["accountList"] });
        },
        onError: () => closeModal(),
      },
    );
  };

  const handleCheckHost = () => {
    accoutnMutation.mutate(targetAccount, {
      onSuccess: ({ data }) => {
        setHost(data.userName);
        setStep((step) => step + 1);
      },
    });
  };

  const handleMoney = (event) => {
    const formattedMoney = setMoneyRegex(event.target.value);
    setMoney(formattedMoney);
  };

  return (
    <S.DepositModalWrapper>
      <S.CreateAccountModalTitle>
        {step === 1 && <span>송금할 계좌를 입력하세요</span>}
        {step === 2 && <span>{host}님에게 송금하시겠어요?</span>}
        {step === 3 && <span>계좌 비밀번호를 입력하세요</span>}
      </S.CreateAccountModalTitle>
      {step === 1 && (
        <LabelInput
          labelTitle="송금 계좌"
          inputType="text"
          handler={targetAccountHandler}
          option={{
            value: setAccountRegex(targetAccount),
            maxLength: 14,
          }}
        />
      )}
      {step === 2 && (
        <LabelInput
          labelTitle="금액"
          inputType="text"
          handler={handleMoney}
          option={{
            min: 1,
            value: money,
          }}
        />
      )}
      {step === 3 && <LabelInput labelTitle="비밀번호" inputType="password" handler={passwordHandler} />}

      <S.ButtonContainer>
        <S.CancelButton onClick={closeModal}>취소하기</S.CancelButton>
        {step === 1 && <S.CreateButton onClick={handleCheckHost}>예금주 조회</S.CreateButton>}
        {step === 2 && (
          <S.CreateButton
            onClick={() => {
              setStep((step) => step + 1);
            }}
          >
            확인
          </S.CreateButton>
        )}
        {step === 3 && <S.CreateButton onClick={handleCheckPassword}>송금하기</S.CreateButton>}
      </S.ButtonContainer>
    </S.DepositModalWrapper>
  );
};
export default DepositModal;
