import { useMutation } from "@tanstack/react-query";
import businessAPI from "apis/business";

export const useTravelCommentMutation = (groupId) => {
  const travelCommentMutation = useMutation({
    mutationFn: ({ groupId, comment }) => businessAPI.postTravelComment(groupId, comment),
    onSuccess: () => {},
    onError: () => {},
  });

  return travelCommentMutation;
};
