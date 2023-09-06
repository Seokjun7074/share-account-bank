import { useMutation } from "@tanstack/react-query";
import bankAPI from "apis/bank";

export const useCreateAccountMutation = () => {
  const createAccountMutation = useMutation({
    mutationFn: bankAPI.createAccount,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: () => {
      alert("계좌 생성에 실패했습니다.");
    },
  });

  return createAccountMutation;
};
