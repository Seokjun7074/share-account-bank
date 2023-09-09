import { useMutation } from "@tanstack/react-query";
import bankAPI from "apis/bank";

export const useSetMainAccountMutation = () => {
  const setMainAccount = useMutation({
    mutationFn: bankAPI.setMainAccount,
    onSuccess: () => {},
    onError: () => {},
  });

  return setMainAccount;
};
