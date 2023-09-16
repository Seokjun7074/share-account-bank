import GroupItem from "components/group/GroupItem/GroupItem";
import * as S from "components/group/GroupList/GroupList.style";
import { useCallback, useRef } from "react";
import SamplePrevArrow from "components/@common/CarouselArrow/SamplePrevArrow";
import SampleNextArrow from "components/@common/CarouselArrow/SampleNextArrow";

const GroupList = ({ groupList }) => {
  const slickRef = useRef(null);
  const sliderSetting = {
    dots: true,
    lazyLoad: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);

  return (
    <S.GroupListWrapper>
      <SamplePrevArrow onClick={previous} />
      <S.GroupListContainer>
        <S.StyledSlider {...sliderSetting} ref={slickRef}>
          {groupList.map((group) => (
            <GroupItem key={group.account} group={group} />
          ))}
        </S.StyledSlider>
      </S.GroupListContainer>
      <SampleNextArrow onClick={next} />
    </S.GroupListWrapper>
  );
};

export default GroupList;
