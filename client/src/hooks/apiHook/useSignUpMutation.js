import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import userAPI from "apis/user";

export const useSignUpMutation = () => {
  const navigate = useNavigate();

  const signUpMutation = useMutation({
    mutationFn: userAPI.signup,
    onSuccess: () => {
      alert("회원가입 완료!");
      navigate("/login");
    },
    onError: () => {
      alert("로그인 실패");
    },
  });

  return signUpMutation;
};
