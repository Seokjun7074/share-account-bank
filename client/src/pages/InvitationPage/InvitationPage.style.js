import Button from "components/@common/Button/Button";
import Flex from "components/@common/Flex/Flex";
import { slideDown, slideUp, vibration } from "constants/animation";
import { styled } from "styled-components";

export const InvitationPageWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 6rem);
  padding: 2rem 0;
`;

export const InvitationMessage = styled.span`
  color: ${({ theme }) => theme.color.darkgray};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  animation: ${slideDown} 1s linear;
`;

export const InvitationImageContainer = styled(Flex)`
  flex-direction: column;
  margin: 0 auto;
  width: 60%;
  gap: 1rem;
  cursor: pointer;
`;

export const InvitationImage = styled.img`
  width: 100%;
  animation: ${vibration} 1s infinite;
`;

export const InvitationInfoText = styled.span`
  color: ${({ theme }) => theme.color.lightgray};
  font-size: ${({ theme }) => theme.fontSize.s};
  position: relative;
  bottom: 4rem;
  animation: ${slideUp} 1s linear;
`;

export const InvitationButton = styled(Button)`
  width: 100%;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.m};
`;

//종명
export const ModalOverlay = styled.div`
  position: fixed; /* 고정 위치로 설정하여 전체 화면을 덮습니다. */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 반투명한 배경을 만듭니다. */
  z-index: 1000; /* 모달보다 위에 위치하도록 설정합니다. */
  display: ${(props) => (props.$show ? "block" : "none")}; /* 모달을 표시/숨깁니다. */
`;

export const ModalContainer = styled.div`
  position: absolute; /* 절대 위치로 설정하여 부모 컨테이너에 상대적으로 배치됩니다. */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 화면 중앙으로 이동합니다. */
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1001; /* 모달보다 위에 위치하도록 설정합니다. */
  display: ${(props) => (props.$show ? "block" : "none")}; /* 모달을 표시/숨깁니다. */
`;
