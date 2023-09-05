import GroupItem from "../GroupItem/GroupItem";
import { GroupListWrapper } from "./GroupList.style";

const GroupList = ({ groupList }) => {
  return (
    <GroupListWrapper>
      {groupList.map((group) => (
        <GroupItem
          key={group.accountName}
          accountName={group.accountName}
          accountNumber={group.accountNumber}
          deposit={group.deposit}
        />
      ))}
    </GroupListWrapper>
  );
};

export default GroupList;
