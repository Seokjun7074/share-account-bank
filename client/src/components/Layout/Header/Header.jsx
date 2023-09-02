import { useLocation } from "react-router-dom";
import * as S from "./Header.style";

const Header = () => {
  const { pathname } = useLocation();

  if (pathname === "/main") return <S.HeaderWrapper>메인</S.HeaderWrapper>;

  return <S.HeaderWrapper>뒤로가기 존재</S.HeaderWrapper>;
};
export default Header;
