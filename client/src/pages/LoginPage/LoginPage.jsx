import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useInput from "hooks/useInput";
import * as S from "./LoginPage.style";
import userAPI from "apis/user";

const LoginPage = () => {
  const navigate = useNavigate();
  const [idInput, setIdInput, idHandler] = useInput("");
  const [passwordInput, setPasswordInput, passwordHandler] = useInput("");
  const loginMutation = useMutation({
    mutationFn: userAPI.login,
    onSuccess: (data, variables, context) => {
      const token = context.response.headers.get("Authorization");
      const refresh = context.response.headers.get("Authorization-refresh");
      sessionStorage.setItem("Authorization", token);
      sessionStorage.setItem("Authorization-refresh", refresh);
      navigate("/main");
    },
  });

  const submitSignUp = () => {
    const submitform = {
      idInput,
      passwordInput,
    };
    loginMutation.mutate(submitform);
  };

  return (
    <S.LoginPageWrapper>
      <S.LoginText> </S.LoginText>
      <S.InputWrapper>
        <S.InputBox placeholder="이메일" type="email" onChange={idHandler} />
        <S.InputBox
          placeholder="비밀번호"
          type="password"
          onChange={passwordHandler}
        />
      </S.InputWrapper>
      <S.NextButton onClick={submitSignUp}>로그인</S.NextButton>
    </S.LoginPageWrapper>
  );
};
export default LoginPage;
