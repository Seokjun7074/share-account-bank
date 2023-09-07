import Flex from "components/@common/Flex/Flex";
import { styled } from "styled-components";

export const ReceiptWrapper = styled(Flex)`
  flex-direction: column;
  width: 100%;
  padding: 3rem;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.color.darkgray};
`;
export const ReceiptCol = styled(Flex)`
  justify-content: space-between;
  border-bottom: 1px dashed ${({ theme }) => theme.color.gray};
  padding-bottom: 0.5rem;
`;
export const ReceiptHeader = styled(Flex)`
  flex-direction: column;
  justify-content: start;
  align-items: start;
  border-bottom: 2px dashed ${({ theme }) => theme.color.gray};
  justify-content: start;
  color: ${({ theme }) => theme.color.darkgray};
  padding: 3rem 0;
  gap: 1rem;
`;
export const ReceiptTitle = styled.h1`
  font-size: 5.5rem;
`;

export const ReceiptContentContainer = styled(Flex)`
  flex-direction: column;
  padding: 3rem 0;
  align-items: start;
  gap: 2rem;
  border-bottom: 2px dashed ${({ theme }) => theme.color.gray};
`;

export const ReceiptContent = styled(Flex)`
  justify-content: space-between;
  color: ${({ theme }) => theme.color.gray};
`;
export const ImageContainer = styled(Flex)`
  position: relative;
  bottom: 10px;
  justify-content: end;
`;
export const PaidIcon = styled.img`
  width: 35%;
`;
