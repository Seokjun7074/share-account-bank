import Flex from "components/@common/Flex/Flex";
import { MdNavigateBefore } from "react-icons/md";
import styled from "styled-components";

const SamplePrevArrow = ({ onClick }) => {
  return (
    <ArrowWrapper onClick={onClick}>
      <MdNavigateBefore size={"6rem"} />
    </ArrowWrapper>
  );
};
export default SamplePrevArrow;

const ArrowWrapper = styled(Flex)`
  height: 100%;
  width: 2rem;
  cursor: pointer;
`;
