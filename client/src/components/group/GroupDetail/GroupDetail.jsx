import * as S from "./GroupDetail.style";

const GroupDetail = () => {
  const groupDummy = {
    groupName: "그루비룸", // 그룹 이름
    account: "계죄번호", // 계좌 번호
    goal: "목표액", // 목표 금액
    dues: "월 회비", // 월 회비
    duesDate: "이체일", // 자동 이체를 할 날짜
    startDate: "여행 예정일", // 여행을 출발할 날짜
    limitMember: "인원", // 제한 인원
    money: "화폐", // yen, yuan, dollar, euro, en ...
  };
  const groupDummyPairs = Object.entries(groupDummy);

  return (
    <S.GroupDetailWrapper>
      <S.GroupDetailTitle>모임 계좌 정보</S.GroupDetailTitle>
      {groupDummyPairs.map(([key, value]) => (
        <S.DetailContainer key={key}>
          <span>{key}:</span>
          <span>{value}</span>
        </S.DetailContainer>
      ))}
    </S.GroupDetailWrapper>
  );
};

export default GroupDetail;
