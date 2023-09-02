import { MdArrowBackIosNew, MdOutlineNotifications } from "react-icons/md";
import { useLocation } from "react-router-dom";
import * as S from "./Header.style";
import { theme } from "styles/theme";

const Header = () => {
  const { pathname } = useLocation();

  if (pathname === "/main")
    return (
      <S.HeaderWrapper $isMain={pathname === "/main"}>
        <MdOutlineNotifications size={"3rem"} color={theme.color.darkgray} />
      </S.HeaderWrapper>
    );

  return (
    <S.HeaderWrapper $isMain={pathname === "/main"}>
      <MdArrowBackIosNew size={"3rem"} color={theme.color.darkgray} />
    </S.HeaderWrapper>
  );
};
export default Header;
