import { useCallback } from "react";
import useInput from "hooks/useInput";
import * as S from "./SignUpPage.style";
import { useSignUpMutation } from "hooks/apiHook/useSignUpMutation";

const SignUpPage = () => {
  const [name, setName, nameHandler] = useInput("");
  const [id, setId, idHandler] = useInput("");
  const [phone, setPhone, phoneHandler] = useInput("");
  const [account, setAccount, accountHandler] = useInput("");
  const [password, setPassword, passwordHandler] = useInput("");
  const [passwordCheck, setPasswordCheck, passwordCheckHandler] = useInput("");
  const signUpMutation = useSignUpMutation();

  const submitSignUp = () => {
    const submitform = {
      name,
      phone,
      account,
      id,
      password,
      passwordCheck,
    };
    signUpMutation.mutate(submitform);
  };

  const validatePassword = useCallback((currentPassword, checkPassword) => {
    if (checkPassword === "") return true;
    return currentPassword === checkPassword;
  }, []);

  return (
    <S.SignUpPageWrapper>
      <S.SignUpText>정보를 입력해주세요</S.SignUpText>
      <S.InputWrapper>
        <S.InputBox placeholder="이름" type="text" onChange={nameHandler} />
        <S.InputBox placeholder="이메일" type="email" onChange={idHandler} />
        <S.InputBox placeholder="전화번호" type="text" onChange={phoneHandler} />
        <S.ValidateAccountContiner>
          <S.InputBox placeholder="계좌번호" type="text" onChange={accountHandler} />
          <S.ValidateAccountButton>인증</S.ValidateAccountButton>
        </S.ValidateAccountContiner>
        <S.InputBox placeholder="비밀번호" type="password" onChange={passwordHandler} />
        <S.InputBox placeholder="비밀번호 확인" type="password" onChange={passwordCheckHandler} />
        {!validatePassword(password, passwordCheck) && (
          <S.PasswordCheckText>비밀번호를 확인해주세요.</S.PasswordCheckText>
        )}
      </S.InputWrapper>
      <S.NextButton onClick={submitSignUp}>다음</S.NextButton>
    </S.SignUpPageWrapper>
  );
};
export default SignUpPage;
