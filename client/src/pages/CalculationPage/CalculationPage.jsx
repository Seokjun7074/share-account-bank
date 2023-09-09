import { useParams } from "react-router-dom";
import { useCalculationMutation } from "hooks/apiHook/useCalculationMutation";
import TravelComment from "components/group/TravelComment/TravelComment";
import Modal from "components/@common/Modal/Modal";
import * as S from "./CalculationPage.style";
import useModal from "hooks/useModal";
import { useState } from "react";

const CalculationPage = () => {
  const { groupId } = useParams();
  const { openModal, closeModal } = useModal();
  const calculationMutation = useCalculationMutation(groupId);
  const [isFinish, setIsFinish] = useState(false);

  const handleCalulation = () => {
    calculationMutation.mutate(
      {},
      {
        onSuccess: () => {
          setIsFinish(true);
        },
      },
    );
  };

  const handleModal = () => {
    if (!isFinish) {
      // alert("정산을 먼저 해주세요!");
      // return;
    }
    openModal();
  };

  return (
    <>
      <S.CalculationPageWrapper>
        <S.CalculationMessage>남은 여비를 정산해주세요!</S.CalculationMessage>
        <S.CalculationImageContainer onClick={handleCalulation}>
          <S.CalculationImage src={process.env.PUBLIC_URL + "/image/phone.png"} alt="logo" />
        </S.CalculationImageContainer>
        <S.CalculationInfoText>클릭해서 정산 요청하기</S.CalculationInfoText>
        <S.CalculationButton onClick={handleModal}>확인</S.CalculationButton>
      </S.CalculationPageWrapper>
      <Modal>
        <TravelComment groupId={groupId} closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default CalculationPage;
