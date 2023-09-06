import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import userAPI from "apis/user";
import { PATH } from "constants/path";

export const useLogInMutation = () => {
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: userAPI.login,
    onSuccess: ({ data }, variables) => {
      sessionStorage.setItem("Authorization", data.accessToken);
      sessionStorage.setItem("Authorization-refresh", data.refreshToken);
      sessionStorage.setItem("userEmail", variables.id);
      navigate(PATH.ROOT);
    },
    onError: () => {
      alert("로그인 실패");
    },
  });

  return loginMutation;
};
