import useInput from "hooks/useInput";
import * as S from "./LoginPage.style";
import { useLogInMutation } from "hooks/apiHook/useLogInMutation";

const LoginPage = () => {
  const [id, setId, idHandler] = useInput("");
  const [password, setPassword, passwordHandler] = useInput("");
  const loginMutation = useLogInMutation();

  const submitSignUp = () => {
    const submitform = {
      id,
      password,
    };
    loginMutation.mutate(submitform);
  };

  return (
    <S.LoginPageWrapper>
      <S.LoginText> </S.LoginText>
      <S.InputWrapper>
        <S.InputBox placeholder="이메일" type="email" onChange={idHandler} />
        <S.InputBox placeholder="비밀번호" type="password" onChange={passwordHandler} />
      </S.InputWrapper>
      <S.NextButton onClick={submitSignUp}>로그인</S.NextButton>
    </S.LoginPageWrapper>
  );
};
export default LoginPage;
