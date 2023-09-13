import { useMutation, useQueryClient } from "@tanstack/react-query";
import bankAPI from "apis/bank";
import { toastError } from "utils/toast";

export const useCreateAccountMutation = () => {
  const queryClient = useQueryClient();

  const createAccountMutation = useMutation({
    mutationFn: bankAPI.createAccount,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["accountList"] });
    },
    onError: () => {
      toastError("계좌 생성에 실패했습니다.");
    },
  });

  return createAccountMutation;
};
