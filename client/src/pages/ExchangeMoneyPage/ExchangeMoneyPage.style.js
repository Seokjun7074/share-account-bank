import Button from "components/@common/Button/Button";
import Flex from "components/@common/Flex/Flex";
import { slideUp } from "constants/animation";
import { styled } from "styled-components";

export const SignUpPageWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 6rem);
  padding: 4rem 0;
  position: relative;
`;

export const MessageContainer = styled(Flex)`
  width: 60%;
  flex-direction: column;
  gap: 2rem;
  align-items: start;
`;

export const SignUpText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.darkgray};
  font-weight: bold;
  animation: ${slideUp} 1s ease-in-out;
`;

export const InputWrapper = styled(Flex)`
  width: 60%;
  flex-direction: column;
  justify-content: space-around;
  gap: 3.5rem;
`;

export const InputBox = styled.input`
  padding: 0.5rem 1rem;
  border-bottom: solid 1px ${({ theme }) => theme.color.darkgray};
  width: 70%;
`;

export const ValidateAccountContiner = styled(Flex)`
  justify-content: space-between;
  width: 100%;
`;
export const MoneyContainer = styled(Flex)`
  justify-content: space-between;
  width: 100%;
`;

export const InputAllMoneyButton = styled(Button)`
  width: 5rem;
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  padding: 0;
`;

export const PasswordCheckText = styled.span`
  color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export const NextButton = styled(Button)`
  padding: 1.5rem 2rem;
  width: 70%;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
`;

// 종명

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

export const FlagContainer = styled(Flex)`
  align-items: center;
  justify-content: right;
  gap: 1rem;
`;

export const CountryFlagImage = styled.img`
  width: 2rem;
`;
export const SelectAccountBox = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;
export const InputLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.darkgray};
  white-space: nowrap;
`;
