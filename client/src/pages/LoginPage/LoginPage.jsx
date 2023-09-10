import * as S from "./LoginPage.style";
import { useLogInMutation } from "hooks/apiHook/useLogInMutation";
import { Form } from "components/@common/Form/Form";
import useForm from "hooks/useForm";

const LoginPage = () => {
  const initialData = {
    id: "",
    password: "",
  };
  const [loginData, handleLoginData] = useForm(initialData);
  const loginMutation = useLogInMutation();

  const submitSignUp = () => {
    loginMutation.mutate(loginData);
  };

  return (
    <S.LoginPageWrapper>
      <S.LoginText>로그인</S.LoginText>
      <S.InputWrapper>
        <Form onSubmit={submitSignUp}>
          <S.InputBox placeholder="이메일" type="email" name="id" onChange={handleLoginData} />
          <S.InputBox placeholder="비밀번호" type="password" name="password" onChange={handleLoginData} />
        </Form>
      </S.InputWrapper>
      <S.NextButton type="submit" onClick={submitSignUp}>
        로그인
      </S.NextButton>
    </S.LoginPageWrapper>
  );
};
export default LoginPage;
