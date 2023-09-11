import GroupDetail from "components/group/GroupDetail/GroupDetail";
import * as S from "./GroupPage.style";
import GroupAccountDetail from "components/group/GroupAccountDetail/GroupAccountDetail";
import { useParams } from "react-router-dom";
import { useGroupQuery } from "hooks/apiHook/useGroupQuery";

const GroupPage = () => {
  const { groupId } = useParams();
  const { groupData } = useGroupQuery(groupId);

  return (
    <>
      <S.GroupPageWrapper>
        <GroupAccountDetail
          groupName={groupData.data.groupName}
          account={groupData.data.account}
          goal={groupData.data.goal}
          balance={groupData.data.balance}
        />
        <GroupDetail
          dues={groupData.data.dues}
          duesDate={groupData.data.duesDate}
          startDate={groupData.data.startDate}
          limitMember={groupData.data.limitMember}
          participants={groupData.data.limitMember}
        />
      </S.GroupPageWrapper>
    </>
  );
};

export default GroupPage;
