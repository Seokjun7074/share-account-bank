import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as S from "./DepositPage.style";
import { useTransactionMutation } from "hooks/apiHook/useTransactionMutation";
import { useState } from "react";
import { useAccountListQuery } from "hooks/apiHook/useAccountListQuery";
import { PATH } from "constants/path";
import { toastError, toastSuccess } from "utils/toast";

const DepositPage = () => {
  const CLICK_MESSAGE = "가방을 클릭해 회비를 모아주세요!";
  const DEPOSIT_MESSAGE = "출금 계좌를 선택해주세요!";

  const [confirm, setConfirm] = useState(false);
  const [pickedAccount, setPickedAccount] = useState("");
  const { groupId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { accountListData } = useAccountListQuery();
  const transactMutation = useTransactionMutation();

  const account = location.state.account;
  const dues = location.state.dues;

  const nonGroupAccountList = accountListData?.data?.accountList.filter((account) => account.group === false);

  const transactMoney = () => {
    const transactData = { sender: pickedAccount, receiver: account, amount: dues };
    transactMutation.mutate(
      { ...transactData },
      {
        onSuccess: () => {
          toastSuccess("입금 완료!");
          navigate(PATH.GROUP_PAGE(groupId));
        },
        onError: () => toastError("입금 실패!"),
      },
    );
  };
  return (
    <S.DepositPageWrapper>
      <S.DepositMessage>{confirm ? DEPOSIT_MESSAGE : CLICK_MESSAGE}</S.DepositMessage>
      <S.DepositImageContainer>
        {confirm ? (
          <S.SelectAccountBox>
            <S.AccountSelect
              name="account"
              onChange={(e) => {
                setPickedAccount(e.target.value);
              }}
            >
              <option value={""}>내 계좌</option>
              {nonGroupAccountList.map((account) => (
                <option key={account.accountId} value={account.accountId}>
                  {account.accountId}
                </option>
              ))}
            </S.AccountSelect>
          </S.SelectAccountBox>
        ) : (
          <S.DepositImage src={process.env.PUBLIC_URL + "/image/bag.png"} alt="logo" onClick={() => setConfirm(true)} />
        )}
      </S.DepositImageContainer>
      {confirm && <S.DepositButton onClick={transactMoney}>회비 입금하기</S.DepositButton>}
    </S.DepositPageWrapper>
  );
};

export default DepositPage;
