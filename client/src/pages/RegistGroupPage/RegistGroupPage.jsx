import * as S from "./RegistGroupPage.style";
import { useSetGroupMutation } from "hooks/apiHook/useSetGroupMutation";
import { useAccountListQuery } from "hooks/apiHook/useAccountListQuery";
import GroupCreateForm from "components/group/GroupCreateForm/GroupCreateForm";
import useModal from "hooks/useModal";
import Modal from "components/@common/Modal/Modal";
import CreateAccountModal from "components/account/CreateAccountModal/CreateAccountModal";

const RegistGroupPage = () => {
  const setGroupMutation = useSetGroupMutation();
  const { accountListData } = useAccountListQuery();
  const { openModal, closeModal } = useModal("createAccount");

  return (
    accountListData && (
      <S.RegistGroupPageWrapper>
        <S.RegistGroupText>모임통장 만들기</S.RegistGroupText>
        <GroupCreateForm
          accountList={accountListData.data?.accountList}
          setGroupMutation={setGroupMutation}
          openModal={openModal}
        />
        <Modal id="createAccount">
          <CreateAccountModal closeModal={closeModal} />
        </Modal>
      </S.RegistGroupPageWrapper>
    )
  );
};
export default RegistGroupPage;
