import Flex from "components/@common/Flex/Flex";
import { styled } from "styled-components";

export const ModalWrapper = styled(Flex)`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const ModalBackground = styled(Flex)`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(1px);
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  z-index: 99;
`;

export const ModalBody = styled.div`
  min-width: 10rem;
  min-height: 10rem;
  max-width: 300px;
  text-align: center;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background-color: white;
`;
