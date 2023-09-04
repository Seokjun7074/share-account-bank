import { useMutation } from "@tanstack/react-query";
import businessAPI from "apis/business";

export const useSetGroupMutation = () => {
  const setGroupMutation = useMutation({
    mutationFn: businessAPI.setGroup,
    onSuccess: () => {
      // queryClient.invalidateQueries 진행
    },
    onError: () => {},
  });

  return setGroupMutation;
};
