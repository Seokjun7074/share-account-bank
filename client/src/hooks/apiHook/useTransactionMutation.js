import { useMutation } from "@tanstack/react-query";
import bankAPI from "apis/bank";

export const useTransactionMutation = () => {
  const transactMutation = useMutation({
    mutationFn: bankAPI.transactAccount,
    onSuccess: () => {
      console.log("입금완료");
    },
    onError: () => {},
  });

  return transactMutation;
};
