import Button from "components/@common/Button/Button";
import Flex from "components/@common/Flex/Flex";
import styled from "styled-components";

export const ConfirmModal = ({ message, closeModal, onConfirm }) => {
  return (
    <ConfirmModalWrapper>
      <ConfirmMessage>{message}</ConfirmMessage>
      <ButtonContainer>
        <CancelButton onClick={closeModal}>취소</CancelButton>
        <ConfirmButton onClick={onConfirm}>확인</ConfirmButton>
      </ButtonContainer>
    </ConfirmModalWrapper>
  );
};

const ConfirmModalWrapper = styled(Flex)`
  width: 300px;
  height: 15rem;
  padding: 2rem;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`;

const ConfirmMessage = styled.span`
  font-weight: bold;
  font-size: 2rem;
  color: ${({ theme }) => theme.color.darkgray};
`;

const ButtonContainer = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  gap: 1rem;
`;

const CancelButton = styled(Button)`
  padding: 1rem 3rem;
  background-color: ${({ theme }) => theme.color.red};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  width: 50%;
`;

const ConfirmButton = styled(CancelButton)`
  background-color: ${({ theme }) => theme.color.primary};
`;
