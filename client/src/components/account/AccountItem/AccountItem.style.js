import Button from "components/@common/Button/Button";
import Flex from "components/@common/Flex/Flex";
import { styled } from "styled-components";

export const AccountItemWrapper = styled(Flex)`
  flex-direction: column;
  width: 100%;
  height: 17rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.offwhite};
  justify-content: space-between;
  overflow: hidden;
`;
export const AccountHeader = styled(Flex)`
  background-color: #33425a;
  justify-content: space-between;
  height: 4rem;
  color: ${({ theme }) => theme.color.offwhite};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  padding: 0 2rem;
`;

export const DepositContainer = styled(Flex)`
  padding: 0 2rem;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 1.5rem;
  font-weight: 600;
  padding-bottom: 1rem;
`;

export const AccountItemNumber = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.gray};
`;

export const Deposit = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.darkgray};
`;

export const AccountButtonContainer = styled(Flex)`
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-bottom: 0.5rem;
  border-top: 1px solid ${({ theme }) => theme.color.lightgray};
`;

export const DetailButton = styled(Button)`
  width: 50%;
  border-radius: 10px;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.primary};
`;
