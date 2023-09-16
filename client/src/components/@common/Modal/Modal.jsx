import useModal from "hooks/useModal";
import * as S from "./Modal.style";
import React, { useEffect } from "react";

function Modal({ children, id }) {
  const { modalToggleState, closeModal } = useModal(id);

  useEffect(() => {
    return closeModal();
  }, []);

  return (
    <>
      {modalToggleState && (
        <S.ModalWrapper>
          <S.ModalBackground onClick={closeModal} />
          <S.ModalBody>{children}</S.ModalBody>
        </S.ModalWrapper>
      )}
    </>
  );
}

export default React.memo(Modal);
