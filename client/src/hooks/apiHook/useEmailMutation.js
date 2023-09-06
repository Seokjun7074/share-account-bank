import { useMutation } from "@tanstack/react-query";
import userAPI from "apis/user";

export const useEmailVerificationMutation = () => {
  const verificationMutation = useMutation({
    mutationFn: userAPI.verifyCode,
    onSuccess: () => {
      alert("인증 되었습니다.");
    },
    onError: () => {
      alert("잘못된 코드입니다.");
    },
  });

  return verificationMutation;
};

export const useEmailSendMutation = () => {
  const sendMutation = useMutation({
    mutationFn: userAPI.sendEmail,
    onSuccess: () => {
      alert("이메일이 전송되었습니다.");
    },
    onError: () => {
      alert("오류가 발생하였습니다.");
    },
  });

  return sendMutation;
};
