import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import userAPI from "apis/user";
import { PATH } from "constants/path";

export const useSignUpMutation = () => {
  const navigate = useNavigate();

  const signUpMutation = useMutation({
    mutationFn: userAPI.signup,
    onSuccess: () => {
      alert("회원가입 완료!");
      navigate(PATH.LOGIN_PAGE);
    },
    onError: () => {
      alert("로그인 실패");
    },
  });

  return signUpMutation;
};
