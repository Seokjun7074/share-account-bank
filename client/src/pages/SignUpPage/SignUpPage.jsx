import { useCallback } from "react";
import * as S from "./SignUpPage.style";
import { useSignUpMutation } from "hooks/apiHook/useSignUpMutation";
import { useEmailVerificationMutation, useEmailSendMutation } from "hooks/apiHook/useEmailMutation";
import EmailModal from "components/user/EmailModal/EmailModal";
import useForm from "hooks/useForm";
import { Form } from "components/@common/Form/Form";
import { replaceDash, setAccountRegex, setPhoneRegex } from "utils/regex";
import Modal from "components/@common/Modal/Modal";
import useModal from "hooks/useModal";

const SignUpPage = () => {
  const initialData = {
    name: "",
    phone: "",
    account: "",
    id: "",
    password: "",
    passwordCheck: "",
  };
  const [signupData, handleSignupData] = useForm(initialData);
  const signUpMutation = useSignUpMutation();
  const sendMutation = useEmailSendMutation();
  const verificationMutation = useEmailVerificationMutation();
  const { openModal, closeModal } = useModal();

  const submitSignUp = (e) => {
    e.preventDefault();
    const requestData = { ...signupData, phone: replaceDash(signupData.phone) };
    signUpMutation.mutate(requestData);
  };

  const sendEmailVerification = (e) => {
    e.preventDefault();
    sendMutation.mutate({ email: signupData.id });
    openModal();
  };

  const verifyEmailCode = (code) => {
    verificationMutation.mutate({ code: code });
  };

  const validatePassword = useCallback((currentPassword, checkPassword) => {
    if (checkPassword === "") return true;
    return currentPassword === checkPassword;
  }, []);

  return (
    <>
      <S.SignUpPageWrapper>
        <S.SignUpText>정보를 입력해주세요</S.SignUpText>
        <S.InputWrapper>
          <Form onSubmit={submitSignUp}>
            <S.InputBox placeholder="이름" type="text" name="name" onChange={handleSignupData} />
            <S.ValidateAccountContiner>
              <S.InputBox placeholder="이메일" type="email" name="id" onChange={handleSignupData} />
              <S.ValidateAccountButton onClick={sendEmailVerification}>인증</S.ValidateAccountButton>
            </S.ValidateAccountContiner>
            <S.InputBox
              placeholder="전화번호"
              type="text"
              name="phone"
              onChange={handleSignupData}
              value={setPhoneRegex(signupData.phone)}
              maxLength="13"
            />
            <S.InputBox
              placeholder="계좌번호"
              type="text"
              name="account"
              onChange={handleSignupData}
              value={setAccountRegex(signupData.account)}
              maxLength="14"
            />
            <S.InputBox placeholder="비밀번호" type="password" name="password" onChange={handleSignupData} />
            <S.InputBox placeholder="비밀번호 확인" type="password" name="passwordCheck" onChange={handleSignupData} />
            {!validatePassword(signupData.password, signupData.passwordCheck) && (
              <S.PasswordCheckText>비밀번호가 일치하지 않습니다.</S.PasswordCheckText>
            )}
          </Form>
        </S.InputWrapper>
        <S.NextButton type="submit" onClick={submitSignUp}>
          다음
        </S.NextButton>
      </S.SignUpPageWrapper>
      <Modal>
        <EmailModal
          onClose={closeModal}
          onVerify={(code) => {
            verifyEmailCode(code);
          }}
        />
      </Modal>
    </>
  );
};
export default SignUpPage;
