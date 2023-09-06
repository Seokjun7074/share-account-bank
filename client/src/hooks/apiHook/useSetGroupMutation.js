import { useMutation } from "@tanstack/react-query";
import businessAPI from "apis/business";
import { PATH } from "constants/path";
import { useNavigate } from "react-router-dom";

export const useSetGroupMutation = () => {
  const navigate = useNavigate();

  const setGroupMutation = useMutation({
    mutationFn: businessAPI.setGroup,
    onSuccess: () => {
      navigate(PATH.ROOT);
    },
    onError: () => {
      alert("에러 발생");
    },
  });

  return setGroupMutation;
};
