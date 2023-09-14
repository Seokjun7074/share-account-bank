import Button from "components/@common/Button/Button";
import Flex from "components/@common/Flex/Flex";
import { styled } from "styled-components";

export const GroupListWrapper = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  height: 17rem;
`;

export const GroupListContainer = styled.div`
  width: calc(100% - 4rem);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const MakeGroupItemWrapper = styled(Flex)`
  flex-direction: column;
  width: 100%;
  height: 20rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: white;
  color: ${({ theme }) => theme.color.red};
  font-weight: bold;
  gap: 2rem;
  overflow: hidden;
`;

export const CreateMainGroupButtonContainer = styled(Flex)`
  color: ${({ theme }) => theme.color.darkgray};
  cursor: pointer;
`;

export const CreateMainGroupButton = styled(Button)`
  font-size: ${({ theme }) => theme.fontSize.m};
`;
