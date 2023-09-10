import Flex from "components/@common/Flex/Flex";
import { slideDown } from "constants/animation";
import { styled } from "styled-components";

export const ReceiptWrapper = styled(Flex)`
  flex-direction: column;
  width: 100%;
  padding: 3rem;
  color: ${({ theme }) => theme.color.darkgray};
  --mask: radial-gradient(5.02px at 50% 5.5px, #000 99%, #0000 101%) calc(50% - 10px) 0/20px 51% repeat-x,
    radial-gradient(5.02px at 50% -0.5px, #0000 99%, #000 101%) 50% 5px/20px calc(51% - 5px) repeat-x,
    radial-gradient(5.02px at 50% calc(100% - 5.5px), #000 99%, #0000 101%) 50% 100%/20px 51% repeat-x,
    radial-gradient(5.02px at 50% calc(100% + 0.5px), #0000 99%, #000 101%) calc(50% - 10px) calc(100% - 5px) / 20px
      calc(51% - 5px) repeat-x;
  -webkit-mask: var(--mask);
  mask: var(--mask);
  background-color: #f1f1f1;
  animation: ${slideDown} 0.6s ease-in-out;
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

export const NumberList = styled.span`
  font-size: 2rem;
`;
