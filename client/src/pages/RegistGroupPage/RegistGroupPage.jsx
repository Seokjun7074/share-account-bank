import * as S from "./RegistGroupPage.style";
import { useSetGroupMutation } from "hooks/apiHook/useSetGroupMutation";
import { useAccountListQuery } from "hooks/apiHook/useAccountListQuery";
import GroupCreateForm from "components/group/GroupCreateForm/GroupCreateForm";
import { useEffect, useState } from "react";

const RegistGroupPage = () => {
  const setGroupMutation = useSetGroupMutation();
  const { accountListData } = useAccountListQuery();

  const [sortesAccountList, setSortedAccountList] = useState([]);

  const sortByRepresentedAccount = (arr) => {
    return arr.sort((a, b) => {
      if (a.represented && !b.represented) return -1;
      else if (!a.represented && b.represented) return 1;
      else return 0;
    });
  };

  useEffect(() => {
    const sortedArr = sortByRepresentedAccount(accountListData?.data.accountList).filter((item) => !item.group);
    setSortedAccountList(sortedArr);
  }, [accountListData]);

  return (
    accountListData && (
      <S.RegistGroupPageWrapper>
        <S.RegistGroupText>모임통장 만들기</S.RegistGroupText>
        <GroupCreateForm accountList={sortesAccountList} setGroupMutation={setGroupMutation} />
      </S.RegistGroupPageWrapper>
    )
  );
};
export default RegistGroupPage;
