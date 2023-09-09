import { styled } from "styled-components";
import Button from "components/@common/Button/Button";
import Flex from "components/@common/Flex/Flex";

export const MainAccountModalWrapper = styled(Flex)`
  width: 300px;
  flex-direction: column;
  padding: 2rem;
  gap: 5rem;
  color: ${({ theme }) => theme.color.darkgray};
`;

export const SelectWrapper = styled(Flex)`
  flex-direction: column;
  gap: 1rem;
`;

export const MainAccountSelect = styled.select`
  width: 100%;
  padding: 0.3rem;
`;

export const WariningMessage = styled.span`
  color: ${({ theme }) => theme.color.red};
  font-size: 1.4rem;
`;

export const SetMainAccountButton = styled(Button)`
  width: 100%;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  border-radius: 10px;
`;
