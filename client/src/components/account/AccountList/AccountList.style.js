import Button from "components/@common/Button/Button";
import Flex from "components/@common/Flex/Flex";
import { styled } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const AccountListWrapper = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  height: 17rem;
`;
export const AccountListContainer = styled.div`
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

// 주계좌

export const CreateMainAccountContainer = styled(Flex)`
  flex-direction: column;
  width: 100%;
  height: 17rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: white;
  color: ${({ theme }) => theme.color.red};
  font-weight: bold;
  gap: 2rem;
  overflow: hidden;
`;

export const CreateMainAccountButtonContainer = styled(Flex)`
  color: ${({ theme }) => theme.color.darkgray};
  cursor: pointer;
`;

export const CreateMainAccountButton = styled(Button)`
  font-size: ${({ theme }) => theme.fontSize.m};
`;
