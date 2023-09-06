import Flex from "components/@common/Flex/Flex";
import { styled } from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled(Flex)`
  flex-direction: column;
  gap: 1rem;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  color: ${({ theme }) => theme.color.darkgray};
`;

export const EmailModalInput = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 1rem;
`;

export const LeftButton = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;
export const RightButton = styled(LeftButton)`
  margin-right: 0;
  background-color: #ccc;
`;
