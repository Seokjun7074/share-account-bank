import * as S from "components/group/TravelComment/TravelComment.style";
import { PATH } from "constants/path";
import { useTravelCommentMutation } from "hooks/apiHook/useTravelCommentMutation";
import useInput from "hooks/useInput";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toastError } from "utils/toast";

const TravelComment = ({ groupId, closeModal }) => {
  const navigate = useNavigate();
  const travelCommentMutation = useTravelCommentMutation(groupId);
  const [comment, setComment, commentHandler] = useInput();
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoreview] = useState("");
  const imageInput = useRef();

  const handelSubmitComment = () => {
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const formData = new FormData();
    formData.append("comment", new Blob([JSON.stringify(comment)], { type: "application/json" }));
    formData.append("photo", photo);

    travelCommentMutation.mutate(
      { groupId, formData, config },
      {
        onSuccess: () => {
          closeModal();
          navigate(PATH.ROOT);
        },
        onError: () => {
          toastError("코멘트 작성 실패!");
          closeModal();
        },
      },
    );
  };

  const handleAddPhoto = (e) => {
    setPhoto(e.target.files[0]);
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setPhotoreview(objectUrl);
  };

  const handleClickImageInput = () => {
    imageInput.current.click();
  };

  return (
    <S.TravelCommentWrapper>
      <S.InputWrapper>
        <S.TravelCommentSpan>여행은 즐거우셨나요?</S.TravelCommentSpan>
        <S.TravelCommentSpan>여행에 대한 코멘트를 남겨주세요!</S.TravelCommentSpan>
      </S.InputWrapper>
      <S.ImagePreview src={photoPreview} />
      <S.PhotoButton onClick={handleClickImageInput}>
        대표 사진 추가
        <S.TravelCommentInput
          type="file"
          placeholder="사진 추가"
          onChange={handleAddPhoto}
          style={{ display: "none" }}
          ref={imageInput}
        />
      </S.PhotoButton>
      <S.TravelCommentInput type="text" placeholder="코멘트 작성하기" onChange={commentHandler} />
      <S.TravelCommentButton onClick={handelSubmitComment}>저장</S.TravelCommentButton>
    </S.TravelCommentWrapper>
  );
};

export default TravelComment;
