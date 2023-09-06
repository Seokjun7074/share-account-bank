import { useCreateAccountMutation } from "hooks/apiHook/useCreateAccountMutation";
import { useState } from "react";
import * as S from "./CreateAccountModal.style";

const CreateAccountModal = ({ closeModal }) => {
  const [isFinished, setIsFinished] = useState(false);
  const createAccountMutation = useCreateAccountMutation();

  const handleCreateAccount = () => {
    createAccountMutation.mutate(
      {},
      {
        onSuccess: (data) => {
          setIsFinished((isFinished) => !isFinished);
        },
      },
    );
  };
  return (
    <S.CreateAccountModalWrapper>
      {isFinished ? (
        <>
          <S.CreateAccountModalTitle>계좌가 생성되었어요!</S.CreateAccountModalTitle>
          <span>{createAccountMutation?.data.data.account.accountId}</span>
          <S.CreateButton onClick={closeModal}>확인</S.CreateButton>
        </>
      ) : (
        <>
          <S.CreateAccountModalTitle>계좌를 생성하시겠어요?</S.CreateAccountModalTitle>
          <S.ButtonContainer>
            <S.CancelButton onClick={closeModal}>취소</S.CancelButton>
            <S.CreateButton onClick={handleCreateAccount}>생성</S.CreateButton>
          </S.ButtonContainer>
        </>
      )}
    </S.CreateAccountModalWrapper>
  );
};

export default CreateAccountModal;
