import useInput from "hooks/useInput";
import * as S from "./SignUpPage.style";
import { useCallback } from "react";

const SignUpPage = () => {
  const [nameInput, setNameInput, nameHandler] = useInput("");
  const [idInput, setIdInput, idHandler] = useInput("");
  const [phoneInput, setPhoneInput, phoneHandler] = useInput("");
  const [accountInput, setAccountInput, accountHandler] = useInput("");
  const [passwordInput, setPasswordInput, passwordHandler] = useInput("");
  const [passwordCheckInput, setPasswordCheckInput, passwordCheckHandler] = useInput("");

  const submitSignUp = () => {
    const submitform = {
      nameInput,
      phoneInput,
      accountInput,
      idInput,
      passwordInput,
      passwordCheckInput,
    };
    console.log(submitform);
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
        {!validatePassword(passwordInput, passwordCheckInput) && (
          <S.PasswordCheckText>비밀번호를 확인해주세요.</S.PasswordCheckText>
        )}
      </S.InputWrapper>
      <S.NextButton onClick={submitSignUp}>다음</S.NextButton>
    </S.SignUpPageWrapper>
  );
};
export default SignUpPage;
