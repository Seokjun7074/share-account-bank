import { styled } from "styled-components";
import Flex from "components/@common/Flex/Flex";

export const RegistGroupPageWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 6rem);
  padding: 2rem 0;
  gap: 6rem;
`;
export const RegistGroupText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.color.darkgray};
  font-weight: bold;
`;
