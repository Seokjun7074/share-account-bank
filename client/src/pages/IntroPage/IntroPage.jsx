import { useNavigate } from "react-router-dom";
import * as S from "./IntroPage.style";
import { PATH } from "constants/path";

const IntroPage = () => {
  const navigate = useNavigate();
  return (
    <S.IntroPageWrapper>
      <S.LogoContainer>
        <S.LogoImage
          src={process.env.PUBLIC_URL + "/image/logo.png"}
          alt="logo"
        />
      </S.LogoContainer>
      <S.ButtonWrapper>
        <S.LoginButton onClick={() => navigate(PATH.LOGIN_PAGE)}>
          로그인
        </S.LoginButton>
        <S.SigninButton onClick={() => navigate(PATH.SIGNUP_PAGE)}>
          회원가입
        </S.SigninButton>
      </S.ButtonWrapper>
    </S.IntroPageWrapper>
  );
};
export default IntroPage;
