import ProgressBar from "components/@common/ProgressBar/ProgressBar";
import * as S from "./GroupItem.style";
import { useNavigate } from "react-router-dom";
import { PATH } from "constants/path";
import { setMoneyRegex } from "utils/regex";

const GroupItem = ({ group }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (group.travel) {
      navigate(PATH.TRAVELING_PAGE(group.groupId));
      return;
    }
    if (group.paid) {
      navigate(PATH.TRAVEL_INFO_PAGE(group.groupId), { state: { group } });
      return;
    }
    navigate(PATH.DEPOSIT_PAGE(group.groupId), { state: { account: group.account, dues: group.dues } });
  };

  return (
    <S.GroupItemWrapper onClick={handleNavigation}>
      <S.GroupItemNameContainer>
        <S.GroupItemName>{group.groupName}</S.GroupItemName>
      </S.GroupItemNameContainer>
      <S.DepositContainer>
        <S.GroupItemNumber>{group.account}</S.GroupItemNumber>
        <S.Deposit>{setMoneyRegex(group.balance)}원</S.Deposit>
        <ProgressBar goalMoney={group.goal} currentMoney={group.balance} />
      </S.DepositContainer>
    </S.GroupItemWrapper>
  );
};

export default GroupItem;
