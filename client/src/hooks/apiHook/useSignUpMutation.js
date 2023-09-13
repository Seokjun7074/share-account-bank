import { useMutation } from "@tanstack/react-query";
import userAPI from "apis/user";
import { PATH } from "constants/path";
import { toastError, toastSuccess } from "utils/toast";

export const useSignUpMutation = () => {
  const signUpMutation = useMutation({
    mutationFn: userAPI.signup,
    onSuccess: () => {
      toastSuccess("회원가입 완료!");
      window.location.replace(PATH.LOGIN_PAGE);
    },
    onError: () => toastError("로그인 실패"),
  });

  return signUpMutation;
};
