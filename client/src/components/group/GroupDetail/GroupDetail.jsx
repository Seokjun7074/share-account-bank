import { useCallback } from "react";
import * as S from "./GroupDetail.style";
import { setMoneyRegex } from "utils/regex";

const GroupDetail = ({ dues, duesDate, startDate, limitMember, participants }) => {
  const changeDate = useCallback((startDate) => {
    const splitedDate = startDate.split("-");
    return splitedDate[0] + "년 " + splitedDate[1] + "월 " + splitedDate[2] + "일";
  }, []);

  return (
    <S.GroupDetailWrapper>
      <S.GroupDetailTitle>모임 계좌 정보</S.GroupDetailTitle>
      <S.DetailContainer>
        <S.DetailKey>월회비</S.DetailKey>
        <S.DetailValue>{setMoneyRegex(dues)}원</S.DetailValue>
      </S.DetailContainer>
      <S.DetailContainer>
        <S.DetailKey>이체일</S.DetailKey>
        <S.DetailValue>매월 {duesDate}일</S.DetailValue>
      </S.DetailContainer>
      <S.DetailContainer>
        <S.DetailKey>여행 예정일</S.DetailKey>
        <S.DetailValue>{changeDate(startDate)}</S.DetailValue>
      </S.DetailContainer>
      <S.DetailContainer>
        <S.DetailKey>참여인원</S.DetailKey>
        <S.DetailValue>{limitMember}명</S.DetailValue>
      </S.DetailContainer>
    </S.GroupDetailWrapper>
  );
};

export default GroupDetail;
