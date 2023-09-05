import { useNavigate } from "react-router-dom";
import * as S from "./MainPage.style";
import GroupList from "components/group/GroupList/GroupList";
import { PATH } from "constants/path";
import { useGroupListQuery } from "hooks/apiHook/useGroupListQuery";

const MainPage = () => {
  // const groupListData = useGroupListQuery();
  const navigate = useNavigate();
  const dummyGroupList = [
    {
      groupName: "여행가장", // 그룹 이름
      account: "110-432-123456", // 계좌 번호
      goal: 10000, // 목표 금액
      balance: 3000, // 잔고
      dues: 30000, // 월 회비
      duesDate: "duesDate", // 자동 이체를 할 날짜
      startDate: "startDate", // 여행을 출발할 날짜
      member: 3, // 현재 참여 인원
      money: "money", // yen, yuan, dollar, euro, en ...
      isPaid: true, // 내가 회비 냈는지 여부
    },
    {
      groupName: "제주도가장", // 그룹 이름
      account: "110-532-123456", // 계좌 번호
      goal: 10000, // 목표 금액
      balance: 7820, // 잔고
      dues: 30000, // 월 회비
      duesDate: "duesDate", // 자동 이체를 할 날짜
      startDate: "startDate", // 여행을 출발할 날짜
      member: 4, // 현재 참여 인원
      money: "money", // yen, yuan, dollar, euro, en ...
      isPaid: true, // 내가 회비 냈는지 여부
    },
  ];

  return (
    <S.MainPageWrapper>
      <S.LabelWrapper>나의 모임 통장</S.LabelWrapper>
      <GroupList groupList={dummyGroupList} />
      <S.CreateGroupButton onClick={() => navigate(PATH.REGIST_GROUP_PAGE)}>+</S.CreateGroupButton>
    </S.MainPageWrapper>
  );
};
export default MainPage;
