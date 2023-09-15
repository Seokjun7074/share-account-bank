import Button from "components/@common/Button/Button";
import Flex from "components/@common/Flex/Flex";
import { styled } from "styled-components";

export const PasswordVerifyModalWrapper = styled(Flex)`
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  color: ${({ theme }) => theme.color.darkgray};
`;

export const PasswordVerifyModalTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const PasswordInput = styled.input`
  margin: 2rem 0;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.color.lightgray};
  border-radius: 10px;
`;

export const ButtonContainer = styled(Flex)`
  width: 100%;
  justify-content: space-between;
`;

export const CancelButton = styled(Button)`
  padding: 1rem 3rem;
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.offwhite};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
`;

export const ConfirmButton = styled(CancelButton)`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
`;
