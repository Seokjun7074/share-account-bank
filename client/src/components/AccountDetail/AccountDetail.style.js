import Button from "components/@common/Button/Button";
import Flex from "components/@common/Flex/Flex";
import { styled } from "styled-components";

export const AccountDetailWrapper = styled(Flex)`
  flex-direction: column;
  width: 100%;
  min-height: 20rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.offwhite};
  justify-content: space-around;
  gap: 2rem;
`;

export const InfoContainer = styled(Flex)`
  flex-direction: column;
  align-items: start;
`;

export const Name = styled.span`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
`;
export const Number = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.lightgray};
`;

export const MoneyContainer = styled(Flex)`
  justify-content: space-between;
  padding: 0 4rem;
`;

export const Money = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.darkgray};
`;
export const AccountButtonContainer = styled(Flex)`
  justify-content: space-around;
`;

export const AccountButton = styled(Button)`
  color: ${({ theme }) => theme.color.darkgray};
  background-color: ${({ theme }) => theme.color.lightgray};
  font-size: ${({ theme }) => theme.fontSize.s};
  padding: 1rem 2rem;
  /* font-weight: bold; */
`;
