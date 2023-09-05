import ProgressBar from "components/@common/ProgressBar/ProgressBar";
import * as S from "./AccountItem.style";

const AccountItem = ({ accountName, accountNumber, deposit }) => {
  return (
    <S.AccountItemWrapper>
      <S.AccountItemNameContainer>
        <S.AccountItemName>{accountName}</S.AccountItemName>
      </S.AccountItemNameContainer>
      <S.DepositContainer>
        <S.AccountItemNumber>{accountNumber}</S.AccountItemNumber>
        <S.Deposit>{deposit}</S.Deposit>
        <ProgressBar goalMoney={1000000} currentMoney={deposit} />
      </S.DepositContainer>
    </S.AccountItemWrapper>
  );
};

export default AccountItem;
