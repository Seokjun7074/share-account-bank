import Button from "components/@common/Button/Button";
import Flex from "components/@common/Flex/Flex";
import { styled } from "styled-components";

export const GroupPageWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding-bottom: 2rem;
`;

export const GroupInviteButton = styled(Button)`
  width: 100%;
  border-radius: 10px;
  padding: 1.3rem;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
`;
