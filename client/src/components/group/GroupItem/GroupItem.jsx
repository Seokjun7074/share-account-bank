import ProgressBar from "components/@common/ProgressBar/ProgressBar";
import * as S from "./GroupItem.style";
import { useNavigate } from "react-router-dom";
import { PATH } from "constants/path";

const GroupItem = ({ group }) => {
  const navigate = useNavigate();
  return (
    <S.GroupItemWrapper onClick={() => navigate(PATH.GROUP_PAGE(group.account))}>
      <S.GroupItemNameContainer>
        <S.GroupItemName>{group.groupName}</S.GroupItemName>
      </S.GroupItemNameContainer>
      <S.DepositContainer>
        <S.GroupItemNumber>{group.account}</S.GroupItemNumber>
        <S.Deposit>{group.balance}</S.Deposit>
        <ProgressBar goalMoney={group.goal} currentMoney={group.balance} />
      </S.DepositContainer>
    </S.GroupItemWrapper>
  );
};

export default GroupItem;
