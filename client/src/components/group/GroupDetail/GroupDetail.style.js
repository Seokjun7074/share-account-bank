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
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  color: ${({ theme }) => theme.color.darkgray};
  /* padding-bottom: 1rem; */
`;

export const DetailContainer = styled(Flex)`
  justify-content: space-between;
`;

export const DetailKey = styled.span`
  color: ${({ theme }) => theme.color.darkgray};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 600;
`;

export const DetailValue = styled(DetailKey)`
  color: ${({ theme }) => theme.color.gray};
`;
