import { useMutation } from "@tanstack/react-query";
import bankAPI from "apis/bank";

export const useCheckAccountPasswordMutation = () => {
  const checkAccountPasswordMutation = useMutation({
    mutationFn: bankAPI.checkAccountPassword,
    onSuccess: () => {},
    onError: () => {},
  });

  return checkAccountPasswordMutation;
};
