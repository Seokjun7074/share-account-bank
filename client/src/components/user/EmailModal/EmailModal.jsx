import * as S from "./EmailModal.style";
import useInput from "hooks/useInput";

const EmailModal = ({ onClose, onVerify }) => {
  const [verificationCode, setVerificationCode, verificationCodeHandler] = useInput("");

  const handleVerify = () => {
    onVerify(verificationCode);
  };

  return (
    <S.ModalContainer>
      <h1>이메일 인증</h1>
      <S.EmailModalSpan>3분 안에 입력해주세요.</S.EmailModalSpan>
      <S.EmailModalInput
        type="text"
        placeholder="인증 번호 입력"
        value={verificationCode}
        onChange={verificationCodeHandler}
      />
      <S.ButtonContainer>
        <S.LeftButton onClick={onClose}>닫기</S.LeftButton>
        <S.RightButton onClick={handleVerify}>확인</S.RightButton>
      </S.ButtonContainer>
    </S.ModalContainer>
  );
};

export default EmailModal;
