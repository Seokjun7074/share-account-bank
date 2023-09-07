import LabelInput from "components/@common/LabelInput/LabelInput";
import * as S from "components/account/DepositModal/DepositModal.style";
import { useTransactionMutation } from "hooks/apiHook/useTransactionMutation";
import useInput from "hooks/useInput";

const DepositModal = ({ selectedMyAccount, closeModal }) => {
  const transactMutation = useTransactionMutation();
  const [targetAccount, setTargetAccount, targetAccountHandler] = useInput();

  const handleTranscation = () => {
    const requestData = {
      sender: selectedMyAccount,
      receiver: targetAccount,
      amount: "Integer",
    };
    transactMutation.mutate({ ...requestData });
  };

  return (
    <S.DepositModalWrapper>
      <S.CreateAccountModalTitle>이체</S.CreateAccountModalTitle>
      <LabelInput labelTitle="송금 계좌" inputType="text" handler={targetAccountHandler} />
      <LabelInput
        labelTitle="금액"
        inputType="number"
        handler={targetAccountHandler}
        option={{
          min: 1,
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
