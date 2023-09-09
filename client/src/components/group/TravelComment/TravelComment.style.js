import { styled } from "styled-components";
import Flex from "components/@common/Flex/Flex";
import Button from "components/@common/Button/Button";

export const TravelCommentWrapper = styled(Flex)`
  width: 300px;
  padding: 2rem 3rem;
  flex-direction: column;
  gap: 2rem;
`;

export const InputWrapper = styled(Flex)`
  flex-direction: column;
  gap: 0.5rem;
`;

export const TravelCommentSpan = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.color.darkgray};
`;

export const TravelCommentInput = styled.input`
  width: 100%;
  border-radius: 10px;
  padding: 1rem;
  background-color: aliceblue;
  font-size: 1.4rem;
`;

export const TravelCommentButton = styled(Button)`
  width: 100%;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  border-radius: 10px;
`;
