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
      <S.GroupHeader>
        <S.Shinhan src={process.env.PUBLIC_URL + "/image/shinhan.png"} alt="Shinhan Logo" />
        <span>{group.groupName}</span>
      </S.GroupHeader>
      <S.GroupItemNameContainer>
        <S.Deposit>{setMoneyRegex(group.balance)}원</S.Deposit>
        <S.GroupItemNumber>{group.account}</S.GroupItemNumber>
      </S.GroupItemNameContainer>
      <S.DepositContainer>
        <S.Left>
          <S.GroupInfo>
            <S.GroupInfoKey>목표액</S.GroupInfoKey>
            <S.GroupInfoValue>{group.goal}</S.GroupInfoValue>
          </S.GroupInfo>
          <S.GroupInfo>
            <S.GroupInfoKey>회비</S.GroupInfoKey>
            <S.GroupInfoValue>{group.dues}</S.GroupInfoValue>
          </S.GroupInfo>
        </S.Left>
        <S.Right>
          <S.GroupInfo>
            <S.GroupInfoKey>입금일</S.GroupInfoKey>
            <S.GroupInfoValue>{group.duesDate}일</S.GroupInfoValue>
          </S.GroupInfo>
          <S.GroupInfo>
            <S.GroupInfoKey>여행예정일</S.GroupInfoKey>
            <S.GroupInfoValue>{group.startDate}</S.GroupInfoValue>
          </S.GroupInfo>
        </S.Right>
      </S.DepositContainer>
    </S.GroupItemWrapper>
  );
};

export default GroupItem;
