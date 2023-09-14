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
