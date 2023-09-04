import { useMutation } from "@tanstack/react-query";
import businessAPI from "apis/business";

export const useJoinLinkMutation = () => {
  const joinLinkMutation = useMutation({
    mutationFn: businessAPI.makeJoinLink,
    onSuccess: (data) => {
      // 클립보드에 링크 복사
    },
    onError: () => {},
  });

  return joinLinkMutation;
};
