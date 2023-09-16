import { useState } from "react";
import Lottie from "lottie-react";
import { PATH } from "constants/path";
import { useCreateAccountMutation } from "hooks/apiHook/useCreateAccountMutation";
import useInput from "hooks/useInput";
import * as S from "pages/CreateAccountPage/CreateAccountPage.style";
import { toastError } from "utils/toast";
import card from "lotties/card";
import useCompleteEffect from "hooks/useCompleteEffect";
import CompleteEffect from "components/@common/CompleteEffect/CompleteEffect";
import money from "lotties/money";

const CreateAccountPage = () => {
  const [password, setPassword, passwordHandeler] = useInput();
  const [passwordCheck, setPasswordCheck, passwordCheckHandeler] = useInput();
  const createAccountMutation = useCreateAccountMutation();
  const [newAccount, setNewAccount] = useState("");
  const [step, setStep] = useState(1);

  const handleCreateAccount = () => {
    createAccountMutation.mutate(password, {
      onSuccess: (data) => {
        setNewAccount(data?.data.account.accountId);
      },
    });
  };

  const handelStepIncrease = () => {
    if (step === 3 && password !== passwordCheck) {
      toastError("비밀번호가 달라요!");
      return;
    }
    if (step === 3) handleCreateAccount();
    if (step === 4) {
      // window.location.replace(PATH.ROOT);
      return;
    }
    setStep((step) => step + 1);
  };

  return (
    <S.CreateAccountPageWrapper>
      {step === 1 && <InfoCreateAccount1 />}
      {step === 2 && <InfoCreateAccount2 passwordHandeler={passwordHandeler} />}
      {step === 3 && <InfoCreateAccount3 passwordCheckHandeler={passwordCheckHandeler} />}
      {step === 4 && <InfoCreateAccount4 newAccount={newAccount} />}
      <S.NextButton onClick={handelStepIncrease}>다음</S.NextButton>
    </S.CreateAccountPageWrapper>
  );
};

export default CreateAccountPage;

const InfoCreateAccount1 = () => {
  return (
    <>
      <S.CreateAccountHeaderContainer>
        <S.CreateAccountHeader>새로운 계좌를 만드시겠어요?</S.CreateAccountHeader>
      </S.CreateAccountHeaderContainer>
      <S.CreateAccountBody>
        <Lottie
          animationData={card}
          style={{
            height: "100%",
          }}
        />
      </S.CreateAccountBody>
    </>
  );
};
const InfoCreateAccount2 = ({ passwordHandeler }) => {
  return (
    <>
      <S.CreateAccountHeaderContainer>
        <S.CreateAccountHeader>비밀번호를 입력해주세요.</S.CreateAccountHeader>
      </S.CreateAccountHeaderContainer>
      <S.CreateAccountBody>
        <S.CreateAccountInput type="password" placeholder="비밀번호 확인" onChange={passwordHandeler} />
      </S.CreateAccountBody>
    </>
  );
};
const InfoCreateAccount3 = ({ passwordCheckHandeler }) => {
  return (
    <>
      <S.CreateAccountHeaderContainer>
        <S.CreateAccountHeader>비밀번호를 확인해주세요.</S.CreateAccountHeader>
      </S.CreateAccountHeaderContainer>
      <S.CreateAccountBody>
        <S.CreateAccountInput type="password" placeholder="비밀번호 확인" onChange={passwordCheckHandeler} />
      </S.CreateAccountBody>
    </>
  );
};
const InfoCreateAccount4 = ({ newAccount }) => {
  const { openEffect } = useCompleteEffect();
  openEffect();

  return (
    <>
      <S.CreateAccountHeaderContainer>
        <S.CreateAccountHeader>새로운 계좌가 생성되었어요!</S.CreateAccountHeader>
      </S.CreateAccountHeaderContainer>
      <S.CreateAccountBody>
        <S.CreateAccountHeader style={{ color: "gray" }}>새로운 계좌번호!</S.CreateAccountHeader>
        <S.CreateAccountHeader>{newAccount}</S.CreateAccountHeader>
      </S.CreateAccountBody>
      <CompleteEffect
        lottie={money}
        message={"새로운 계좌가 생성되었어요!"}
        callback={() => window.location.replace(PATH.ROOT)}
      />
    </>
  );
};
