import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdCreditCard } from "react-icons/md";
import GroupItem from "components/group/GroupItem/GroupItem";
import * as S from "components/group/GroupList/GroupList.style";
import { useCallback, useRef } from "react";
import SamplePrevArrow from "components/@common/CarouselArrow/SamplePrevArrow";
import SampleNextArrow from "components/@common/CarouselArrow/SampleNextArrow";

const GroupList = ({ groupList, navigateNewGroup }) => {
  const sliderSetting = {
    dots: false,
    lazyLoad: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const slickRef = useRef(null);

  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);

  return (
    <S.GroupListWrapper>
      <SamplePrevArrow onClick={previous} />
      <S.GroupListContainer>
        <Slider {...sliderSetting} ref={slickRef}>
          {groupList.map((group) => (
            <GroupItem key={group.account} group={group} />
          ))}
          <>
            <S.MakeGroupItemWrapper onClick={navigateNewGroup}>
              <span>새로운 모임 계좌를 만들까요?</span>
              <S.CreateMainGroupButtonContainer>
                <S.CreateMainGroupButton>신규 모임 계좌 개설하러가기</S.CreateMainGroupButton>
                <MdCreditCard size={"2rem"} />
              </S.CreateMainGroupButtonContainer>
            </S.MakeGroupItemWrapper>
          </>
        </Slider>
      </S.GroupListContainer>
      <SampleNextArrow onClick={next} />
    </S.GroupListWrapper>
  );
};

export default GroupList;
