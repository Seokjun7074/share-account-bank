import { useState } from "react";
import * as S from "./AccountModal.style";
import Flex from "components/@common/Flex/Flex";

const AccountModal = ({ onClose, onVerify }) => {
  const [verificationCode, setVerificationCode] = useState("");

  const handleVerify = () => {
    onVerify(verificationCode);
  };

  return (
    <S.ModalWrapper>
      <S.ModalContainer>
        <h2>이메일 인증</h2>
        <h5 style={{ color: "red" }}>3분 안에 입력해주세요.</h5>
        <S.AccountModalInput
          type="text"
          placeholder="인증 번호 입력"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
        />
        <Flex>
          <S.LeftButton onClick={handleVerify}>확인</S.LeftButton>
          <S.RightButton onClick={onClose}>닫기</S.RightButton>
        </Flex>
      </S.ModalContainer>
    </S.ModalWrapper>
  );
};

export default AccountModal;
