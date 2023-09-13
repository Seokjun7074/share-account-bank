import * as S from "components/account/MainAccountModal/MainAccountModal.style";
import { useSetMainAccountMutation } from "hooks/apiHook/useSetMainAccountMutation";
import { useState } from "react";
import { toastSuccess } from "utils/toast";

const MainAccountModal = ({ accountList, closeModal }) => {
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const setMainAccount = useSetMainAccountMutation();

  const handleSelectAccount = (e) => {
    if (e.target.value === "내 계좌 목록") {
      setConfirm(false);
      return;
    }
    setSelectedAccount(e.target.value);
    setConfirm(true);
  };

  const submitMainAccount = () => {
    if (!confirm) {
      return;
    }
    setMainAccount.mutate(selectedAccount, {
      onSuccess: () => {
        toastSuccess("주계좌 설정이 완료되었습니다.");
        closeModal();
      },
    });
  };

  return (
    <S.MainAccountModalWrapper>
      <h1>계좌를 선택해주세요.</h1>
      <S.MainAccountSelect onChange={handleSelectAccount}>
        <option value={null}>내 계좌 목록</option>
        {accountList.map((account) => (
          <option key={account.accountId}>{account.accountId}</option>
        ))}
      </S.MainAccountSelect>
      <S.SelectWrapper>
        <S.SetMainAccountButton onClick={submitMainAccount}>설정</S.SetMainAccountButton>
        {confirm ? (
          <S.WariningMessage> </S.WariningMessage>
        ) : (
          <S.WariningMessage>계좌를 선택하지 않았습니다.</S.WariningMessage>
        )}
      </S.SelectWrapper>
    </S.MainAccountModalWrapper>
  );
};

export default MainAccountModal;
