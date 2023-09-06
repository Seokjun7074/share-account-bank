import GroupDetail from "components/group/GroupDetail/GroupDetail";
import * as S from "./GroupPage.style";
import AccountDetail from "components/account/AccountDetail/AccountDetail";
import { useParams } from "react-router-dom";
import { useGroupQuery } from "hooks/apiHook/useGroupQuery";

const GroupPage = () => {
  const { groupId } = useParams();
  // const { groupData } = useGroupQuery(groupId);
  const groupDataDummy = {
    groupName: "그루비룸", // 그룹 이름
    account: "계죄번호", // 계좌 번호
    goal: "목표액", // 목표 금액
    balance: "잔액", // 잔고
    money: "화폐", // yen, yuan, dollar, euro, en ...
    //
    dues: "월 회비", // 월 회비
    duesDate: "이체일", // 자동 이체를 할 날짜
    startDate: "여행 예정일", // 여행을 출발할 날짜
    limitMember: "인원", // 제한 인원
    participants: [
      {
        userName: "이름1",
        email: "이메일1",
      },
    ],
  };

  const { participants, ...groupInfoData } = groupDataDummy;

  return (
    <S.GroupPageWrapper>
      <AccountDetail />
      <GroupDetail
        dues={groupDataDummy.dues}
        duesDate={groupDataDummy.duesDate}
        startDate={groupDataDummy.startDate}
        limitMember={groupDataDummy.limitMember}
        participants={groupDataDummy.limitMember}
      />
    </S.GroupPageWrapper>
  );
};

export default GroupPage;
