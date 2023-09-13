import Flex from "components/@common/Flex/Flex";
import { styled } from "styled-components";

export const GroupItemWrapper = styled(Flex)`
  flex-direction: column;
  width: 100%;
  min-height: 17rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.offwhite};
  justify-content: space-between;
  cursor: pointer;
  overflow: hidden;
`;
export const GroupHeader = styled(Flex)`
  background-color: #33425a;
  justify-content: space-between;
  height: 4rem;
  color: ${({ theme }) => theme.color.offwhite};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  padding: 0 2rem;
`;

export const GroupItemNameContainer = styled(Flex)`
  padding: 0 2rem;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 1.5rem;
  font-weight: 600;
  padding-bottom: 1rem;
`;

export const GroupItemNumber = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.gray};
`;

export const Deposit = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.darkgray};
`;

export const DepositContainer = styled(Flex)`
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  border-top: 1px solid ${({ theme }) => theme.color.lightgray};
`;
