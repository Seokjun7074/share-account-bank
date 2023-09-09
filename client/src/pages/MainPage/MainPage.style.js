import Button from "components/@common/Button/Button";
import Flex from "components/@common/Flex/Flex";
import { styled } from "styled-components";

export const MainPageWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  padding: 4rem 3rem;
  gap: 2rem;
`;
export const LabelWrapper = styled(Flex)`
  justify-content: start;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.darkgray};
  background-color: ${({ theme }) => theme.color.white};
  font-weight: bold;
  position: sticky;
  top: 6rem;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightgray};
`;

export const CreateGroupButton = styled(Button)`
  width: 100%;
  padding: 1rem 2rem;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.lightgray};
`;
