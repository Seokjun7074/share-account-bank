import Flex from "components/@common/Flex/Flex";
import styled from "styled-components";

export const StoreModlaWrapper = styled(Flex)`
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
`;

export const LeftButton = styled.button`
  padding: 1rem 3rem;
  background-color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.fontSize.s};
  color: #fff;
  border-radius: 10px;
  font-weight: bold;
`;
export const RightButton = styled(LeftButton)`
  background-color: ${({ theme }) => theme.color.primary};
`;
