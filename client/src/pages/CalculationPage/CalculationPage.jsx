import { useParams } from "react-router-dom";
import { useCalculationMutation } from "hooks/apiHook/useCalculationMutation";
import TravelComment from "components/group/TravelComment/TravelComment";
import Modal from "components/@common/Modal/Modal";
import * as S from "./CalculationPage.style";
import useModal from "hooks/useModal";
import { useState } from "react";
import { toastError, toastSuccess } from "utils/toast";
import { ConfirmModal } from "components/@common/ConfirmModal/ConfirmModal";

const CalculationPage = () => {
  const { groupId } = useParams();
  const { openModal: openTravelComment, closeModal: closeTravelComment } = useModal("travelComment");
  const { openModal: openConfirm, closeModal: closeConfirm } = useModal("confirmCalculation");
  const calculationMutation = useCalculationMutation(groupId);
  const [isFinish, setIsFinish] = useState(false);

  const handleCalulation = () => {
    console.log("d");
    if (isFinish) return;
    calculationMutation.mutate(
      {},
      {
        onSuccess: () => {
          toastSuccess("정산이 완료되었어요!");
          setIsFinish(true);
          closeConfirm();
        },
      },
    );
  };

  const handleConfirm = () => {
    openConfirm();
  };

  const handleModal = () => {
    if (!isFinish) {
      toastError("정산을 먼저 해주세요!");
      return;
    }
    openTravelComment();
  };

  return (
    <>
      <S.CalculationPageWrapper>
        <S.CalculationMessage>남은 여비를 정산해주세요!</S.CalculationMessage>
        <S.CalculationImageContainer onClick={handleConfirm}>
          <S.CalculationImage src={process.env.PUBLIC_URL + "/image/phone.png"} alt="logo" />
          <S.CalculationInfoText>클릭해서 정산 요청하기</S.CalculationInfoText>
        </S.CalculationImageContainer>
        <S.CalculationButton onClick={handleModal}>확인</S.CalculationButton>
      </S.CalculationPageWrapper>
      <Modal id="travelComment">
        <TravelComment groupId={groupId} closeModal={closeTravelComment} />
      </Modal>
      <Modal id="confirmCalculation">
        <ConfirmModal message={"정산을 진행할까요?"} closeModal={closeConfirm} onConfirm={handleCalulation} />
      </Modal>
    </>
  );
};

export default CalculationPage;
