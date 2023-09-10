import Button from "components/@common/Button/Button";
import Flex from "components/@common/Flex/Flex";
import { styled } from "styled-components";

export const TripResultPageWrapper = styled(Flex)`
  width: 100%;
  flex-direction: column;
  padding: 4rem 3rem;
  gap: 4rem;
`;

export const TripCalculationButton = styled(Button)`
  width: 100%;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
`;

export const groupInfoContainer = styled(Flex)`
  width: 100%;
  justify-content: space-between;
`;
