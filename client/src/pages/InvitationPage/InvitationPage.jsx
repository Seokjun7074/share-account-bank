import * as S from "./InvitationPage.style";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import businessAPI from "apis/business";
import InviteLinkModal from "components/invite/InviteLinkModal/InviteLinkModal";
import { toastSuccess } from "utils/toast";

const InvitationPage = () => {
  const id = useLocation().pathname.match(/\/invite\/(\w+)/)[1]; // 현재 url path에서 /invite/를 빼고 groupName을 추출
  const [invitationLink, setInvitationLink] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const generateInvitationLink = async () => {
    try {
      const response = await businessAPI.makeJoinLink(id);
      const link = response.data;
      navigator.clipboard.writeText(link).then(() => toastSuccess("클립보드에 복사되었습니다."));
    } catch (error) {
      console.error("초대 링크 생성 오류:", error);
    }
  };
  return (
    <S.InvitationPageWrapper>
      <S.InvitationMessage>
        초대링크를 생성해
        <br /> 친구를 초대하세요!
      </S.InvitationMessage>
      <S.InvitationImageContainer onClick={generateInvitationLink}>
        <S.InvitationImage src={process.env.PUBLIC_URL + "/image/link.png"} alt="logo" />
        <S.InvitationInfoText>클릭해서 초대링크 생성</S.InvitationInfoText>
      </S.InvitationImageContainer>
      <S.InvitationButton>완료</S.InvitationButton>
      {/* <S.ModalOverlay $show={showModal} onClick={() => setShowModal(false)} />
      <S.ModalContainer $show={showModal}>
        <InviteLinkModal link={invitationLink} />
      </S.ModalContainer> */}
    </S.InvitationPageWrapper>
  );
};

export default InvitationPage;
