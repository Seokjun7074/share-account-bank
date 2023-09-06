import * as S from "./RegistGroupPage.style";
import { useSetGroupMutation } from "hooks/apiHook/useSetGroupMutation";
import { useAccountListQuery } from "hooks/apiHook/useAccountListQuery";
import GroupCreateForm from "components/group/GroupCreateForm/GroupCreateForm";

const RegistGroupPage = () => {
  const setGroupMutation = useSetGroupMutation();
  const accountListData = useAccountListQuery();

  const accountList = [
    {
      accountId: "1234", // 계좌번호
      balance: 3000, // 잔액
    },
    {
      accountId: "5678", // 계좌번호
      balance: 1000, // 잔액
    },
    {
      accountId: "1345", // 계좌번호
      balance: 2000, // 잔액
    },
  ];

  return (
    <S.RegistGroupPageWrapper>
      <S.RegistGroupText>모임통장 만들기</S.RegistGroupText>
      <GroupCreateForm accountList={accountList} setGroupMutation={setGroupMutation} />
    </S.RegistGroupPageWrapper>
  );
};
export default RegistGroupPage;
