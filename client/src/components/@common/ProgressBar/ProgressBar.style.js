import { styled } from "styled-components";
import Flex from "../Flex/Flex";
import { slideRight } from "constants/animation";

export const ProgressBarWrapper = styled(Flex)`
  width: 100%;
  height: 2.5rem;
  justify-content: start;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.white};
  overflow: hidden;
`;

export const Bar = styled(Flex)`
  width: ${({ $percent }) => $percent}%;
  height: 100%;
  justify-content: end;
  padding-right: 1rem;
  border-radius: 20px;
  background-color: #81b6fb;
  color: #acd0ff;
  font-size: 1.2rem;
  animation: ${slideRight} 1s ease-in-out;
`;
