import * as S from "components/group/TravelComment/TravelComment.style";
import { PATH } from "constants/path";
import { useTravelCommentMutation } from "hooks/apiHook/useTravelCommentMutation";
import useInput from "hooks/useInput";
import { useNavigate } from "react-router-dom";

const TravelComment = ({ groupId, closeModal }) => {
  const navigate = useNavigate();
  const travelCommentMutation = useTravelCommentMutation(groupId);
  const [comment, setComment, commentHandler] = useInput();

  const handelSubmitComment = () => {
    travelCommentMutation.mutate(
      { groupId, comment },
      {
        onSuccess: () => {
          closeModal();
          navigate(PATH.ROOT);
        },
        onError: () => {
          alert("코멘트 작성 실패!");
        },
      },
    );
  };

  return (
    <S.TravelCommentWrapper>
      <S.InputWrapper>
        <S.TravelCommentSpan>여행은 즐거우셨나요?</S.TravelCommentSpan>
        <S.TravelCommentSpan>여행에 대한 코멘트를 남겨주세요!</S.TravelCommentSpan>
      </S.InputWrapper>
      <S.TravelCommentInput type="text" placeholder="코멘트 작성하기" onChange={commentHandler} />
      <S.TravelCommentButton onClick={handelSubmitComment}>저장</S.TravelCommentButton>
    </S.TravelCommentWrapper>
  );
};

export default TravelComment;
