import { useMutation } from "@tanstack/react-query";
import businessAPI from "apis/business";

export const useTravelCommentMutation = (groupId) => {
  const travelCommentMutation = useMutation({
    mutationFn: () => businessAPI.postTravelComment(groupId),
    onSuccess: () => {},
    onError: () => {},
  });

  return travelCommentMutation;
};
