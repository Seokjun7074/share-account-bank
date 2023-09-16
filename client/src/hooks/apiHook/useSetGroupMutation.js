import { useMutation } from "@tanstack/react-query";
import businessAPI from "apis/business";
import { PATH } from "constants/path";
import { useNavigate } from "react-router-dom";
import { toastSuccess } from "utils/toast";

export const useSetGroupMutation = () => {
  const navigate = useNavigate();

  const setGroupMutation = useMutation({
    mutationFn: businessAPI.setGroup,
    onSuccess: () => {
      toastSuccess("모임 통장 생성 완료!");
      navigate(PATH.ROOT);
    },
    onError: () => {},
  });

  return setGroupMutation;
};
