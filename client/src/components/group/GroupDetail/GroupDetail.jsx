import * as S from "./GroupDetail.style";

const GroupDetail = ({ dues, duesDate, startDate, limitMember, participants }) => {
  const title = { dues: "월회비", duesDate: "이체일", startDate: "여행 예정일", limitMember: "참여인원" };
  const groupInfoDataPairs = Object.entries({ dues, duesDate, startDate, limitMember });

  return (
    <S.GroupDetailWrapper>
      <S.GroupDetailTitle>모임 계좌 정보</S.GroupDetailTitle>
      {groupInfoDataPairs.map(([key, value]) => (
        <S.DetailContainer key={key}>
          <S.DetailKey>{title[key]}</S.DetailKey>
          <S.DetailValue>{value}</S.DetailValue>
        </S.DetailContainer>
      ))}
    </S.GroupDetailWrapper>
  );
};

export default GroupDetail;
