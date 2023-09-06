import * as S from "./RegistGroupPage.style";
import { useSetGroupMutation } from "hooks/apiHook/useSetGroupMutation";
import { useAccountListQuery } from "hooks/apiHook/useAccountListQuery";
import GroupCreateForm from "components/group/GroupCreateForm/GroupCreateForm";
import useModal from "hooks/useModal";
import Modal from "components/@common/Modal/Modal";
import CreateAccountModal from "components/account/CreateAccountModal/CreateAccountModal";

const RegistGroupPage = () => {
  const setGroupMutation = useSetGroupMutation();
  const accountListData = useAccountListQuery();

  const { openModal, closeModal } = useModal();

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
      <GroupCreateForm accountList={accountList} setGroupMutation={setGroupMutation} openModal={openModal} />
      <Modal>
        <CreateAccountModal closeModal={closeModal} />
      </Modal>
    </S.RegistGroupPageWrapper>
  );
};
export default RegistGroupPage;
