import Button from "components/@common/Button/Button";
import Flex from "components/@common/Flex/Flex";
import { styled } from "styled-components";

export const CreateAccountModalWrapper = styled(Flex)`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;
  padding: 3rem;
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
  padding: 0.6rem 2.5rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.color.primary};
  color: white;
  font-weight: bold;
`;

export const CancelButton = styled(CreateButton)`
  background-color: ${({ theme }) => theme.color.red};
`;
