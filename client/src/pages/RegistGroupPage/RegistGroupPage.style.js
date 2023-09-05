import { styled } from "styled-components";
import Flex from "components/@common/Flex/Flex";
import Button from "components/@common/Button/Button";

export const RegistGroupPageWrapper = styled(Flex)`
  flex-direction: column;
  height: calc(100vh - 6rem);
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
  text-align: center;
  width: 70%;
`;

export const InputBox = styled.input`
  padding: 0.5rem 1rem;
  border-bottom: solid 1px ${({ theme }) => theme.color.darkgray};
  width: 60%;
  text-align: end;
`;

export const LabelContainer = styled(Flex)`
  justify-content: space-between;
  gap: 1rem;
`;

export const InputLabel = styled.label`
  /* width: 7rem; */
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.darkgray};
  white-space: nowrap;
`;

export const NextButton = styled(Button)`
  width: 60%;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.m};
`;
