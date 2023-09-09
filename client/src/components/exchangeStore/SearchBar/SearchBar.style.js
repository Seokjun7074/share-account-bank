import Flex from "components/@common/Flex/Flex";
import { Form } from "components/@common/Form/Form";
import { styled } from "styled-components";

export const SearchBarWapper = styled(Flex)`
  top: 6rem;
  position: sticky;
  width: 100%;
  justify-content: space-between;
  background-color: aliceblue;
  border-radius: 20px;
  padding: 0.5rem 2rem;
`;

export const LocationSearchForm = styled(Form)`
  flex-direction: row;
`;
export const LocationSearchInput = styled.input`
  padding: 0.5rem;
  width: 50%;
`;
