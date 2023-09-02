import Button from "components/@common/Button/Button";
import Flex from "components/@common/Flex/Flex";
import { styled } from "styled-components";

export const DepositPageWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  padding: 9rem 0;
`;

export const DepositMessage = styled.span`
  color: ${({ theme }) => theme.color.darkgray};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
`;

export const DepositImageContainer = styled(Flex)`
  margin: 0 auto;
  width: 60%;
`;

export const DepositImage = styled.img`
  width: 100%;
`;

export const DepositButton = styled(Button)`
  width: 60%;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.m};
`;
