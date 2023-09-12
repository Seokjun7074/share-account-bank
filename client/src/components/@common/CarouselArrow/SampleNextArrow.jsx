import Flex from "components/@common/Flex/Flex";
import { MdNavigateNext } from "react-icons/md";
import styled from "styled-components";

const SampleNextArrow = ({ onClick }) => {
  return (
    <ArrowWrapper onClick={onClick}>
      <MdNavigateNext size={"6rem"} />
    </ArrowWrapper>
  );
};
export default SampleNextArrow;

const ArrowWrapper = styled(Flex)`
  height: 100%;
  width: 2rem;
  cursor: pointer;
`;
