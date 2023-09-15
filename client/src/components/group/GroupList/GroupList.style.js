import Button from "components/@common/Button/Button";
import Flex from "components/@common/Flex/Flex";
import Slider from "react-slick";
import { styled } from "styled-components";

export const GroupListWrapper = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  height: 20rem;
`;

export const GroupListContainer = styled.div`
  width: calc(100% - 4rem);
  border-radius: 10px;
`;
export const StyledSlider = styled(Slider)`
  .slick-slide {
    outline: none;
    border-radius: 10px;
  }
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-list {
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  padding-bottom: 1rem;
`;

export const MakeGroupItemWrapper = styled(Flex)`
  flex-direction: column;
  width: 100%;
  height: 20rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: white;
  color: ${({ theme }) => theme.color.red};
  font-weight: bold;
  gap: 2rem;
  overflow: hidden;
`;

export const CreateMainGroupButtonContainer = styled(Flex)`
  color: ${({ theme }) => theme.color.darkgray};
  cursor: pointer;
`;

export const CreateMainGroupButton = styled(Button)`
  font-size: ${({ theme }) => theme.fontSize.m};
`;
