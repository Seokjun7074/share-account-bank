import Flex from "components/@common/Flex/Flex";
import { styled } from "styled-components";

export const GroupDetailWrapper = styled(Flex)`
  flex-direction: column;
  width: 100%;
  min-height: 20rem;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.offwhite};
  justify-content: space-around;
  gap: 1rem;
`;

export const GroupDetailTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  color: ${({ theme }) => theme.color.darkgray};
  padding-bottom: 1rem;
`;

export const DetailContainer = styled(Flex)`
  justify-content: start;
  gap: 1rem;
  color: ${({ theme }) => theme.color.darkgray};
`;
