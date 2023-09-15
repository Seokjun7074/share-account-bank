import Button from "components/@common/Button/Button";
import Flex from "components/@common/Flex/Flex";
import { slideUp, vibration } from "constants/animation";
import { styled } from "styled-components";

export const CalculationPageWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 6rem);
  padding: 2rem 0;
`;

export const CalculationMessage = styled.span`
  color: ${({ theme }) => theme.color.darkgray};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  animation: ${slideUp} 1s linear;
`;

export const CalculationImageContainer = styled(Flex)`
  margin: 0 auto;
  width: 70%;
  flex-direction: column;
  gap: 2rem;
  cursor: pointer;
`;

export const CalculationImage = styled.img`
  width: 100%;
  animation: ${vibration} 1s infinite;
`;
export const CalculationInfoText = styled.span`
  color: ${({ theme }) => theme.color.gray};
  font-size: ${({ theme }) => theme.fontSize.s};
  position: relative;
  bottom: 4rem;
  animation: ${slideUp} 2s linear;
`;

export const CalculationButton = styled(Button)`
  width: 100%;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.m};
`;
