import Flex from "components/@common/Flex/Flex";
import { styled } from "styled-components";

export const HeaderWrapper = styled(Flex)`
  height: 6rem;
  justify-content: ${({ $isMain }) => ($isMain ? "end" : "start")};
  padding: 1rem 3rem;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.color.white};
  border-bottom: 1px solid rgba(0, 27, 55, 0.1);
`;
