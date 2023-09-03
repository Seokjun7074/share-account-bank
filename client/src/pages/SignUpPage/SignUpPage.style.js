import Button from "components/@common/Button/Button";
import Flex from "components/@common/Flex/Flex";
import { styled } from "styled-components";

export const SignUpPageWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 7rem 0;
`;

export const SignUpText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.color.darkgray};
  font-weight: bold;
`;

export const InputWrapper = styled(Flex)`
  width: 60%;
  flex-direction: column;
  justify-content: space-around;
  gap: 3.5rem;
`;

export const InputBox = styled.input`
  padding: 0.5rem 1rem;
  border-bottom: solid 1px ${({ theme }) => theme.color.darkgray};
  width: 100%;
`;

export const ValidateAccountContiner = styled(Flex)`
  justify-content: space-between;
  width: 100%;
`;
export const ValidateAccountButton = styled(Button)`
  width: 5rem;
  color: ${({ theme }) => theme.color.primary};
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0;
`;

export const PasswordCheckText = styled.span`
  color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export const NextButton = styled(Button)`
  width: 60%;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.m};
`;
