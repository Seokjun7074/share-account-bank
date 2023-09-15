import Button from "components/@common/Button/Button";
import Flex from "components/@common/Flex/Flex";
import { styled } from "styled-components";

export const DepositModalWrapper = styled(Flex)`
  min-width: 30rem;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;
  padding: 2rem 3rem;
`;

export const CreateAccountModalTitle = styled.h3`
  font-weight: bold;
  color: ${({ theme }) => theme.color.darkgray};
`;

export const ButtonContainer = styled(Flex)`
  justify-content: space-between;
  gap: 2rem;
`;

export const CreateButton = styled(Button)`
  width: 50%;
  padding: 0.8rem 2.2rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.color.primary};
  color: white;
  font-weight: bold;
`;

export const CancelButton = styled(CreateButton)`
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.offwhite};
`;
