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
          <S.Shinhan src={process.env.PUBLIC_URL + "/image/shinhan.png"} alt="Shinhan Logo" />
        </S.AccountHeader>
        <S.DepositContainer>
          <S.LeftBody>
            <S.Deposit>{setMoneyRegex(balance)}원</S.Deposit>
            <S.AccountItemNumber>{accountId}</S.AccountItemNumber>
          </S.LeftBody>
        </S.DepositContainer>
        <S.AccountButtonContainer>
          <S.Left>
            <S.DetailButton onClick={handleSelectAccount}>이체</S.DetailButton>
          </S.Left>
          <S.Right>
            <S.DetailButton onClick={() => navigate(PATH.ACCOUNT_PAGE(accountId))}>조회</S.DetailButton>
          </S.Right>
        </S.AccountButtonContainer>
      </S.AccountItemWrapper>
    </>
  );
};

export default AccountItem;
