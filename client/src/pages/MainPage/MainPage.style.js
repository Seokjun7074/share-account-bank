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
  font-weight: bold;
`;
