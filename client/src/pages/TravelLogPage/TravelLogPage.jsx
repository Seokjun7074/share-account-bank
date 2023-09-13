import { useTravelLogsQuery } from "hooks/apiHook/useTravelLogsQuery";
import * as S from "pages/TravelLogPage/TravelLogPage.style";
import { useCallback } from "react";

const TravelLogPage = () => {
  const travelLogsQuery = useTravelLogsQuery();
  const logList = travelLogsQuery?.travelLogsData?.data;

  const convertDateToText = useCallback((date) => {
    const dateArr = date.split("-");
    return String(dateArr[0]) + "년 " + String(parseInt(dateArr[1])) + "월의 추억";
  }, []);

  const dummy = [
    {
      photo: "photo",
      travelId: 1,
      groupName: "groupName",
      startDate: "startDate",
      endDate: "endDate",
    },
    {
      photo: "photo",
      travelId: 2,
      groupName: "groupName",
      startDate: "startDate",
      endDate: "endDate",
    },
    {
      photo: "photo",
      travelId: 3,
      groupName: "groupName",
      startDate: "startDate",
      endDate: "endDate",
    },
  ];
  return (
    <S.TravelLogPageWrapper>
      <S.TravelGrid>
        {logList?.map((item) => (
          <S.TravelCard key={item.travelId}>
            <S.ImageContainer>
              <S.TravelImage src={item.photo} />
            </S.ImageContainer>
            <S.TravelCardButton>{convertDateToText(item.startDate)}</S.TravelCardButton>
          </S.TravelCard>
        ))}
      </S.TravelGrid>
    </S.TravelLogPageWrapper>
  );
};

export default TravelLogPage;
