import { useNavigate, useParams } from "react-router-dom";
import * as S from "components/account/PasswordVerifyModal/PasswordVerifyModal.style";
import { PATH } from "constants/path";
import useInput from "hooks/useInput";

const PasswordVerifyModal = ({ closeModal }) => {
  const navigate = useNavigate();
  const { groupId } = useParams();
  const [password, setPassword, handlePassword] = useInput("");

  const handleCheckPassword = () => {
    navigate(PATH.EXCHANGE_STORE_PAGE(groupId));
  };

  return (
    <S.PasswordVerifyModalWrapper>
      <S.PasswordVerifyModalTitle>비밀번호를 입력하세요</S.PasswordVerifyModalTitle>
      <S.PasswordInput type="password" onChange={handlePassword} />
      <S.ButtonContainer>
        <S.CancelButton onClick={closeModal}>취소</S.CancelButton>
        <S.ConfirmButton onClick={handleCheckPassword}>확인</S.ConfirmButton>
      </S.ButtonContainer>
    </S.PasswordVerifyModalWrapper>
  );
};
export default PasswordVerifyModal;
