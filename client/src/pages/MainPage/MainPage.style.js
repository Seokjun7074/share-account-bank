import Button from "components/@common/Button/Button";
import Flex from "components/@common/Flex/Flex";
import { styled } from "styled-components";

export const MainPageWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  gap: 3.5rem;
`;

export const IconContainer = styled(Flex)`
  justify-content: start;
  gap: 1rem;
`;

export const AccountInfoContainer = styled(Flex)`
  flex-direction: column;
  gap: 2rem;
`;

export const LabelWrapper = styled(Flex)`
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.darkgray};
  background-color: ${({ theme }) => theme.color.white};
  font-weight: bold;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightgray};
`;

export const ChangeButton = styled.button`
  width: 30%;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color.primary};
  font-weight: bold;
`;

export const CreateGroupButton = styled(Button)`
  width: 100%;
  padding: 1rem 2rem;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.lightgray};
`;
