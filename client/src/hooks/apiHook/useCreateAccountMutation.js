import { useMutation } from "@tanstack/react-query";
import bankAPI from "apis/bank";

export const useCreateAccountMutation = (userId) => {
  const CreateAccountMutation = useMutation({
    mutationFn: bankAPI.createAccount(userId),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: () => {},
  });

  return CreateAccountMutation;
};
