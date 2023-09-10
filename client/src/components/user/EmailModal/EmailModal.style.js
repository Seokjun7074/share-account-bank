import Flex from "components/@common/Flex/Flex";
import { styled } from "styled-components";

export const ModalContainer = styled(Flex)`
  flex-direction: column;
  padding: 20px;
  color: ${({ theme }) => theme.color.darkgray};
`;

export const EmailModalSpan = styled.span`
  color: ${({ theme }) => theme.color.red};
  font-weight: bold;
`;

export const EmailModalInput = styled.input`
  width: 100%;
  padding: 1rem;
  margin: 30px 0;
  border: 1px solid #ccc;
  border-radius: 1rem;
`;

export const ButtonContainer = styled(Flex)`
  width: 100%;
  justify-content: space-between;
`;

export const LeftButton = styled.button`
  padding: 1rem 3rem;
  background-color: ${({ theme }) => theme.color.red};
  color: #fff;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.4rem;
`;
export const RightButton = styled(LeftButton)`
  background-color: ${({ theme }) => theme.color.primary};
`;
