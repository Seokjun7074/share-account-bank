import Button from "components/@common/Button/Button";
import Flex from "components/@common/Flex/Flex";
import { styled } from "styled-components";

export const GroupAccountDetailWrapper = styled(Flex)`
  flex-direction: column;
  width: 100%;
  min-height: 20rem;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.offwhite};
  justify-content: space-around;
  gap: 2rem;
`;

export const InfoContainer = styled(Flex)`
  justify-content: space-between;
`;

export const ProgressBarContainer = styled(Flex)`
  width: 60%;
`;

export const Name = styled.span`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
`;
export const Number = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.gray};
`;

export const MoneyContainer = styled(Flex)`
  justify-content: space-between;
  padding: 0 4rem;
`;

export const Money = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.darkgray};
`;
export const GroupAccountButtonContainer = styled(Flex)`
  justify-content: space-around;
  gap: 1rem;
`;

export const GroupAccountButton = styled(Button)`
  width: 50%;
  color: ${({ theme }) => theme.color.darkgray};
  background-color: ${({ theme }) => theme.color.lightgray};
  font-size: ${({ theme }) => theme.fontSize.s};
  padding: 1rem 2rem;
  font-weight: bold;
`;
