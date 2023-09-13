import { useNavigate } from "react-router-dom";
import * as S from "./AccountItem.style";
import { PATH } from "constants/path";
import { useSetRecoilState } from "recoil";
import { selectedMyAccountState } from "recoil/atoms";
import { setMoneyRegex } from "utils/regex";

const AccountItem = ({ accountId, balance, openModal }) => {
  const navigate = useNavigate();
  const setSelectedMyAccountState = useSetRecoilState(selectedMyAccountState);

  const handleSelectAccount = () => {
    openModal();
    setSelectedMyAccountState(accountId);
  };

  return (
    <>
      <S.AccountItemWrapper>
        <S.AccountHeader>
          <span>Shinhan</span>
        </S.AccountHeader>
        <S.DepositContainer>
          <S.AccountItemNumber>{accountId}</S.AccountItemNumber>
          <S.Deposit>{setMoneyRegex(balance)}원</S.Deposit>
        </S.DepositContainer>
        <S.AccountButtonContainer>
          <S.DetailButton onClick={handleSelectAccount}>이체</S.DetailButton>
          <S.DetailButton onClick={() => navigate(PATH.ACCOUNT_PAGE(accountId))}>조회</S.DetailButton>
        </S.AccountButtonContainer>
      </S.AccountItemWrapper>
    </>
  );
};

export default AccountItem;
