import * as S from "./MainPage.style";
import GroupList from "components/group/GroupList/GroupList";

const MainPage = () => {
  const dummyGroupList = [
    { accountName: "name1", accountNumber: "110-22-3456", deposit: "300000" },
    { accountName: "name2", accountNumber: "110-33-7891", deposit: "600000" },
    { accountName: "name3", accountNumber: "110-44-1234", deposit: "70000" },
    { accountName: "name4", accountNumber: "110-55-7243", deposit: "540000" },
  ];
  return (
    <S.MainPageWrapper>
      <S.LabelWrapper>나의 모임 통장</S.LabelWrapper>
      <GroupList groupList={dummyGroupList} />
    </S.MainPageWrapper>
  );
};
export default MainPage;
