import Flex from "components/@common/Flex/Flex";
import styled from "styled-components";

export const ListItem = styled(Flex)`
  flex-direction: column;
  gap: 1rem;
`;

export const StoreItem = styled(Flex)`
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightgray};
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.darkgray};
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;
export const InfoContainer = styled(Flex)`
  flex-direction: column;
  align-items: end;
`;

export const LogoImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;
export const AddressSpan = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color.gray};
`;
