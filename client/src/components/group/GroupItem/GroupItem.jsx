import ProgressBar from "components/@common/ProgressBar/ProgressBar";
import * as S from "./GroupItem.style";

const GroupItem = ({ accountName, accountNumber, deposit }) => {
  return (
    <S.GroupItemWrapper>
      <S.GroupItemNameContainer>
        <S.GroupItemName>{accountName}</S.GroupItemName>
      </S.GroupItemNameContainer>
      <S.DepositContainer>
        <S.GroupItemNumber>{accountNumber}</S.GroupItemNumber>
        <S.Deposit>{deposit}</S.Deposit>
        <ProgressBar goalMoney={1000000} currentMoney={deposit} />
      </S.DepositContainer>
    </S.GroupItemWrapper>
  );
};

export default GroupItem;
