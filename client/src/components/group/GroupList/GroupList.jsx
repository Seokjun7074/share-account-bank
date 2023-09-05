import GroupItem from "../GroupItem/GroupItem";
import { GroupListWrapper } from "./GroupList.style";

const GroupList = ({ groupList }) => {
  return (
    <GroupListWrapper>
      {groupList.map((group) => (
        <GroupItem key={group.account} group={group} />
      ))}
    </GroupListWrapper>
  );
};

export default GroupList;
