import { useMutation } from "@tanstack/react-query";
import bankAPI from "apis/bank";

export const useAccountHostMutation = () => {
  const accountMutation = useMutation({
    mutationFn: bankAPI.checkAccountHost,
    onSuccess: () => {},
    onError: () => {},
  });
  return accountMutation;
};
