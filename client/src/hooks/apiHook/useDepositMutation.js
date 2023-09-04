import { useMutation } from "@tanstack/react-query";
import bankAPI from "apis/bank";

export const useDepositMutation = () => {
  const depositMutation = useMutation({
    mutationFn: bankAPI.depositAccount,
    onSuccess: () => {
      console.log("입금완료");
    },
    onError: () => {},
  });

  return depositMutation;
};
