import Modal from "components/@common/Modal/Modal";
import { PATH } from "constants/path";
import useModal from "hooks/useModal";
import * as S from "pages/TravelingPage/TravelingPage.style";
import { useNavigate, useParams } from "react-router-dom";

const TravelingPage = () => {
  const { openModal, closeModal } = useModal();
  const navigate = useNavigate();
  const { groupId } = useParams();

  const handleNavigate = () => {
    closeModal();
    navigate(PATH.TRIPRESULT_PAGE(groupId));
  };

  return (
    <>
      <S.TravelingPageWrapper>
        <S.TravelingImageContainer>
          <S.TravelingImage src={process.env.PUBLIC_URL + "/image/ticket.png"} alt="logo" />
        </S.TravelingImageContainer>
        <S.MessageWrapper>
          <S.TravelingMessage>두근두근 여행 시작!</S.TravelingMessage>
          <S.TravelingText>즐거운 여행 되세요!</S.TravelingText>
        </S.MessageWrapper>
        <S.TravelingButton onClick={openModal}>여행 마치기</S.TravelingButton>
      </S.TravelingPageWrapper>
      <Modal>
        <S.ConfirmModalWrapper>
          <S.ConfirmModalText>즐거운 여행이 끝났나요?</S.ConfirmModalText>
          <S.InfoMessage>확인을 누르시면 여행이 종료됩니다.</S.InfoMessage>
          <S.ButtonContainer>
            <S.CancelButton onClick={closeModal}>취소</S.CancelButton>
            <S.ConfirmButton onClick={handleNavigate}>확인</S.ConfirmButton>
          </S.ButtonContainer>
        </S.ConfirmModalWrapper>
      </Modal>
    </>
  );
};

export default TravelingPage;
