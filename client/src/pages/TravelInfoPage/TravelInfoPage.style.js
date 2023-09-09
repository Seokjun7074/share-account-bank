import Button from "components/@common/Button/Button";
import Flex from "components/@common/Flex/Flex";
import { styled } from "styled-components";

export const TravelInfoPageWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: space-around;
  height: calc(100vh - 6rem);
  padding: 9rem 0;
`;

export const MessageWrapper = styled(Flex)`
  flex-direction: column;
  gap: 2rem;
`;

export const TravelInfoMessage = styled.span`
  color: ${({ theme }) => theme.color.darkgray};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
`;

export const TravelInfoText = styled(TravelInfoMessage)`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 400;
`;

export const TravelInfoImageContainer = styled(Flex)`
  margin: 0 auto;
  width: 60%;
`;

export const TravelInfoImage = styled.img`
  width: 100%;
`;

export const TravelInfoButton = styled(Button)`
  width: 60%;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.m};
`;
