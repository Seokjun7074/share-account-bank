import Button from "components/@common/Button/Button";
import Flex from "components/@common/Flex/Flex";
import { styled } from "styled-components";

export const CreateAccountPageWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 6rem);
  padding: 7rem 5rem;
`;

export const CreateAccountHeaderContainer = styled(Flex)`
  justify-content: start;
`;

export const CreateAccountHeader = styled.h1`
  color: ${({ theme }) => theme.color.darkgray};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
`;

export const CreateAccountBody = styled(Flex)`
  flex-direction: column;
  gap: 3rem;
  justify-content: space-between;
`;

export const CreateAccountInput = styled.input`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  background-color: ${({ theme }) => theme.color.offwhite};
  padding: 1rem;
  border-radius: 8px;
  color: ${({ theme }) => theme.color.darkgray};
  font-weight: bold;
`;

export const NextButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.primary};
  color: white;
  padding: 1.3rem 2rem;
  width: 100%;
  font-weight: bold;
`;
