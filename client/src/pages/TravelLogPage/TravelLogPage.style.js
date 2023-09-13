import Flex from "components/@common/Flex/Flex";
import { styled } from "styled-components";

export const TravelLogPageWrapper = styled(Flex)`
  width: 100%;
  padding: 4rem 3rem;
`;

export const TravelGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const TravelCard = styled(Flex)`
  height: 30rem;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 1rem;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.offwhite};
  cursor: pointer;
  box-shadow: 0px 0px 2px 2px ${({ theme }) => theme.color.offwhite};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.s};
`;
export const ImageContainer = styled(Flex)`
  width: 100%;
  height: 20rem;
  justify-content: start;
`;
export const TravelImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const TravelCardButton = styled(Flex)`
  width: 100%;
  height: calc(100% - 20rem);
`;
