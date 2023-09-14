import Flex from "components/@common/Flex/Flex";
import { styled } from "styled-components";

export const GroupItemWrapper = styled(Flex)`
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.white};
  height: 20rem;
  justify-content: space-between;
  cursor: pointer;
  overflow: hidden;
`;
export const GroupHeader = styled(Flex)`
  background: linear-gradient(to bottom, #36475f, #2c394f);
  justify-content: space-between;
  height: 4rem;
  color: ${({ theme }) => theme.color.offwhite};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  padding: 0 2rem;
`;

export const LeftBody = styled(Flex)`
  height: 100%;
  width: 50%;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;
export const RightBody = styled(LeftBody)`
  align-items: end;
`;

export const Airplane = styled.img`
  width: 30%;
`;

export const Shinhan = styled.img`
  height: 65%;
`;

export const GroupItemNameContainer = styled(Flex)`
  padding: 2rem;
  justify-content: start;
  align-items: start;
  gap: 1rem;
  font-weight: 600;
  padding-bottom: 1rem;
`;

export const GroupItemNumber = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.gray};
`;

export const Deposit = styled.span`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.darkgray};
`;

export const DepositContainer = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.color.offwhite};
  overflow: hidden;
  border-top: 1px solid ${({ theme }) => theme.color.lightgray};
`;

export const Left = styled(Flex)`
  width: 50%;
  background-color: ${({ theme }) => theme.color.offwhite};
`;
export const Right = styled(Left)`
  width: 50%;
  background-color: ${({ theme }) => theme.color.offwhite};
  border-left: 1px solid ${({ theme }) => theme.color.lightgray};
`;

export const GroupInfo = styled(Flex)`
  padding: 1rem;
  flex-direction: column;
  align-items: start;
  color: ${({ theme }) => theme.color.darkgray};
  font-weight: bold;
  gap: 1.5rem;
  white-space: nowrap;
`;

export const GroupInfoKey = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.gray};
`;
export const GroupInfoValue = styled(GroupInfoKey)`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.darkgray};
`;
