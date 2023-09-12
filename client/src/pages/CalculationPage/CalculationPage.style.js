import Button from "components/@common/Button/Button";
import Flex from "components/@common/Flex/Flex";
import { styled } from "styled-components";

export const CalculationPageWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: space-around;
  height: calc(100vh - 6rem);
  padding: 9rem 0;
`;

export const CalculationMessage = styled.span`
  color: ${({ theme }) => theme.color.darkgray};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
`;

export const CalculationImageContainer = styled(Flex)`
  margin: 0 auto;
  width: 60%;
  cursor: pointer;
`;

export const CalculationImage = styled.img`
  width: 100%;
`;
export const CalculationInfoText = styled.span`
  color: ${({ theme }) => theme.color.lightgray};
  font-size: ${({ theme }) => theme.fontSize.s};
  position: relative;
  bottom: 4rem;
`;

export const CalculationButton = styled(Button)`
  width: 60%;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.m};
`;
