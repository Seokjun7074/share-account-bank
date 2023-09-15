import Button from "components/@common/Button/Button";
import Flex from "components/@common/Flex/Flex";
import { slideUp } from "constants/animation";
import { styled } from "styled-components";

export const TravelInfoPageWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 0;
  height: calc(100vh - 6rem);
`;

export const MessageWrapper = styled(Flex)`
  flex-direction: column;
  gap: 2rem;
`;

export const TravelInfoMessage = styled.span`
  color: ${({ theme }) => theme.color.darkgray};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  animation: ${slideUp} 1s linear;
`;

export const TravelInfoText = styled(TravelInfoMessage)`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 400;
  animation: ${slideUp} 1.1s linear;
`;

export const TravelInfoImageContainer = styled(Flex)`
  margin: 0 auto;
  width: 60%;
  height: 40%;
`;

export const TravelInfoImage = styled.img`
  width: 100%;
`;

export const TravelInfoButton = styled(Button)`
  width: 100%;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
`;
