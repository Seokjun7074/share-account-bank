import { useMutation } from "@tanstack/react-query";
import userAPI from "apis/user";
import { PATH } from "constants/path";
import { toastError } from "utils/toast";

export const useLogInMutation = () => {
  const loginMutation = useMutation({
    mutationFn: userAPI.login,
    onSuccess: ({ data }, variables) => {
      sessionStorage.setItem("Authorization", data.accessToken);
      sessionStorage.setItem("Authorization-refresh", data.refreshToken);
      sessionStorage.setItem("userEmail", variables.id);
      window.location.replace(PATH.ROOT);
    },
    onError: () => toastError("로그인 실패"),
  });

  return loginMutation;
};
