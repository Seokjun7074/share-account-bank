import { useMutation } from "@tanstack/react-query";
import userAPI from "apis/user";
import { toastError, toastSuccess } from "utils/toast";

export const useEmailVerificationMutation = () => {
  const verificationMutation = useMutation({
    mutationFn: userAPI.verifyCode,
    onSuccess: () => toastSuccess("인증 되었습니다."),
    onError: () => toastError("잘못된 코드입니다."),
  });

  return verificationMutation;
};

export const useEmailSendMutation = () => {
  const sendMutation = useMutation({
    mutationFn: userAPI.sendEmail,
    onSuccess: () => toastSuccess("이메일이 전송되었습니다."),
    onError: () => toastError("오류가 발생하였습니다."),
  });

  return sendMutation;
};
export const useAccountVerificationMutation = () => {
  const verificationMutation = useMutation({
    mutationFn: userAPI.verifyAccount,
    onSuccess: () => toastSuccess("인증 되었습니다."),
    onError: () => toastError("잘못된 코드입니다."),
  });

  return verificationMutation;
};
export const useAccountSendMutation = () => {
  const sendMutation = useMutation({
    mutationFn: userAPI.sendAccount,
    onSuccess: () => toastSuccess("인증코드가 전송되었습니다."),
    onError: () => toastError("오류가 발생하였습니다."),
  });

  return sendMutation;
};
