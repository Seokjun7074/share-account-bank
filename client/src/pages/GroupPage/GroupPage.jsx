import GroupDetail from "components/group/GroupDetail/GroupDetail";
import * as S from "./GroupPage.style";
import AccountDetail from "components/account/AccountDetail/AccountDetail";
import { useParams } from "react-router-dom";

const GroupPage = () => {
  const { groupId } = useParams();
  console.log(groupId);
  return (
    <S.GroupPageWrapper>
      <AccountDetail />
      <GroupDetail />
    </S.GroupPageWrapper>
  );
};

export default GroupPage;
