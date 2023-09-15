import Button from "components/@common/Button/Button";
import Flex from "components/@common/Flex/Flex";
import { styled } from "styled-components";

export const InputWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  gap: 3.5rem;
  text-align: center;
  width: 70%;
  height: 100%;
`;

export const CustomSelect = styled.select`
  border-bottom: solid 1px ${({ theme }) => theme.color.darkgray};
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  color: ${({ theme }) => theme.color.darkgray};
`;

export const SelectAccountBox = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const CreateAccountButton = styled(Button)`
  width: 10rem;
  color: ${({ theme }) => theme.color.darkgray};
  font-size: 1.4rem;
  font-weight: 600;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
    font-weight: 900;
  }
`;

export const InputLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.darkgray};
  white-space: nowrap;
`;

export const FlagContainer = styled(Flex)`
  align-items: center;
  justify-content: right;
  gap: 1rem;
`;

export const CountryFlagImage = styled.img`
  width: 2rem;
`;

export const NextButton = styled(Button)`
  width: 100%;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.m};
`;
