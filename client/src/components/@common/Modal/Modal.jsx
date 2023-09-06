import useModal from "hooks/useModal";
import * as S from "./Modal.style";
import React from "react";

function Modal({ children, id }) {
  const { modalToggleState, closeModal } = useModal(id);

  return (
    <>
      {modalToggleState && (
        <>
          <S.ModalBackground onClick={closeModal} />
          <S.ModalBody>{children}</S.ModalBody>
        </>
      )}
    </>
  );
}

export default React.memo(Modal);
