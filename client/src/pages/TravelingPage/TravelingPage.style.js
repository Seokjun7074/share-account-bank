import Button from "components/@common/Button/Button";
import Flex from "components/@common/Flex/Flex";
import { slideUp } from "constants/animation";
import { styled } from "styled-components";

export const TravelingPageWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 6rem);
  padding: 2rem 0;
`;

export const MessageWrapper = styled(Flex)`
  flex-direction: column;
  gap: 2rem;
`;

export const TravelingMessage = styled.span`
  color: ${({ theme }) => theme.color.darkgray};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  animation: ${slideUp} 1s linear;
`;

export const TravelingText = styled(TravelingMessage)`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 400;
  animation: ${slideUp} 1.1s linear;
`;

export const TravelingImageContainer = styled(Flex)`
  flex-direction: column;
  margin: 0 auto;
  width: 70%;
  height: 50%;
`;

export const TravelingImage = styled.img`
  width: 100%;
`;

export const TravelingButton = styled(Button)`
  padding: 1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
`;
// MODAL

export const ConfirmModalWrapper = styled(Flex)`
  width: 300px;
  padding: 2rem;
  flex-direction: column;
`;

export const ConfirmModalText = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  padding: 2rem;
`;

export const InfoMessage = styled.span`
  font-size: 1.1rem;
  padding-bottom: 2rem;
`;

export const ButtonContainer = styled(Flex)`
  width: 100%;
  justify-content: space-around;
  gap: 2rem;
`;

export const CancelButton = styled(Button)`
  width: 50%;
  padding: 0.8rem 2rem;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.red};
`;

export const ConfirmButton = styled(CancelButton)`
  background-color: ${({ theme }) => theme.color.primary};
`;
