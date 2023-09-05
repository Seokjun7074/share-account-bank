import { styled } from "styled-components";
import Flex from "components/@common/Flex/Flex";
import Button from "components/@common/Button/Button";

export const RegistGroupPageWrapper = styled(Flex)`
  flex-direction: column;
  height: 100vh;
  padding: 7rem 0;
  gap: 6rem;
`;
export const RegistGroupText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.color.darkgray};
  font-weight: bold;
`;

export const InputWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: space-around;
  gap: 3.5rem;
`;

export const InputBox = styled.input`
  padding: 0.5rem 1rem;
  border-bottom: solid 1px ${({ theme }) => theme.color.darkgray};
  width: 60%;
`;

export const NextButton = styled(Button)`
  width: 60%;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.m};
`;
