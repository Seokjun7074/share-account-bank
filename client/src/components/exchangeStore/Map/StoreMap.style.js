import Button from "components/@common/Button/Button";
import Flex from "components/@common/Flex/Flex";
import styled from "styled-components";

export const StoreModlaWrapper = styled(Flex)`
  width: 300px;
  padding: 2rem;
  flex-direction: column;
  gap: 2rem;
  overflow: hidden;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid ${({ theme }) => theme.color.lightgray};
`;

export const ModalButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  gap: 2rem;
`;

export const LeftButton = styled(Button)`
  width: 50%;
  padding: 1rem 3rem;
  background-color: ${({ theme }) => theme.color.offwhite};
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.s};
  border-radius: 10px;
  font-weight: bold;
`;
export const RightButton = styled(LeftButton)`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.offwhite};
`;
