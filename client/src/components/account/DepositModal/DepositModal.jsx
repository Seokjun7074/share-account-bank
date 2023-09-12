import { useQueryClient } from "@tanstack/react-query";
import LabelInput from "components/@common/LabelInput/LabelInput";
import * as S from "components/account/DepositModal/DepositModal.style";
import { useAccountHostMutation } from "hooks/apiHook/useAccountHostMutation";
import { useTransactionMutation } from "hooks/apiHook/useTransactionMutation";
import useInput from "hooks/useInput";
import { useState } from "react";
import { replaceComma, setAccountRegex, setMoneyRegex } from "utils/regex";

const DepositModal = ({ selectedMyAccount, closeModal }) => {
  const queryClient = useQueryClient();
  const transactMutation = useTransactionMutation();
  const accoutnMutation = useAccountHostMutation();
  const [targetAccount, setTargetAccount, targetAccountHandler] = useInput("");
  const [money, setMoney] = useState("");
  const [isHostChecked, setIsHostChecked] = useState(false);
  const [host, setHost] = useState("");

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
          closeModal();
          queryClient.invalidateQueries({ queryKey: ["accountList"] });
        },
      },
    );
  };

  const handleCheckHost = () => {
    accoutnMutation.mutate(targetAccount, {
      onSuccess: ({ data }) => {
        setHost(data.userName);
        setIsHostChecked(true);
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
        {isHostChecked ? `${host}님에게 송금하시겠어요?` : `송금할 계좌를 입력하세요`}
      </S.CreateAccountModalTitle>
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
        <S.CancelButton onClick={closeModal}>취소하기</S.CancelButton>
        {isHostChecked ? (
          <S.CreateButton onClick={handleTranscation}>송금하기</S.CreateButton>
        ) : (
          <S.CreateButton onClick={handleCheckHost}>예금주 조회</S.CreateButton>
        )}
      </S.ButtonContainer>
    </S.DepositModalWrapper>
  );
};
export default DepositModal;

// 예금주 실명 조회
