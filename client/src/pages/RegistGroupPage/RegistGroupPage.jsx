import * as S from "./RegistGroupPage.style";
import { useSetGroupMutation } from "hooks/apiHook/useSetGroupMutation";
import { useAccountListQuery } from "hooks/apiHook/useAccountListQuery";
import GroupCreateForm from "components/group/GroupCreateForm/GroupCreateForm";

const RegistGroupPage = () => {
  const setGroupMutation = useSetGroupMutation();
  const { accountListData } = useAccountListQuery();

  return (
    accountListData && (
      <S.RegistGroupPageWrapper>
        <S.RegistGroupText>모임통장 만들기</S.RegistGroupText>
        <GroupCreateForm accountList={accountListData.data?.accountList} setGroupMutation={setGroupMutation} />
      </S.RegistGroupPageWrapper>
    )
  );
};
export default RegistGroupPage;
