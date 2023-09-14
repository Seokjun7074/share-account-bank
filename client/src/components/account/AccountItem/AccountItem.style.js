import Button from "components/@common/Button/Button";
import Flex from "components/@common/Flex/Flex";
import { styled } from "styled-components";

export const AccountItemWrapper = styled(Flex)`
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.white};
  justify-content: space-between;
  overflow: hidden;
`;
export const AccountHeader = styled(Flex)`
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

export const DepositContainer = styled(Flex)`
  padding: 2rem;
  /* flex-direction: column; */
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
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.darkgray};
`;

export const AccountButtonContainer = styled(Flex)`
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-top: 1px solid ${({ theme }) => theme.color.lightgray};
  background-color: ${({ theme }) => theme.color.offwhite};
`;
export const Left = styled(Flex)`
  width: 50%;
`;
export const Right = styled(Left)`
  width: 50%;
  border-left: 1px solid ${({ theme }) => theme.color.lightgray};
`;

export const DetailButton = styled(Button)`
  width: 50%;
  border-radius: 10px;
  padding: 1.5rem;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.darkgray};
`;
