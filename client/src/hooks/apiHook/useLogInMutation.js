import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import userAPI from "apis/user";

export const useLogInMutation = () => {
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: userAPI.login,
    onSuccess: (data, variables, context) => {
      const token = context.response.headers.get("Authorization");
      const refresh = context.response.headers.get("Authorization-refresh");
      sessionStorage.setItem("Authorization", token);
      sessionStorage.setItem("Authorization-refresh", refresh);
      navigate("/main");
    },
    onError: () => {
      alert("로그인 실패");
    },
  });

  return loginMutation;
};
