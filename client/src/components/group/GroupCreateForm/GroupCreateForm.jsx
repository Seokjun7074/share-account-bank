import { useState } from "react";
import LabelInput from "components/@common/LabelInput/LabelInput";
import useForm from "hooks/useForm";
import * as S from "./GroupCreateForm.style";
import { Form } from "components/@common/Form/Form";

const GroupCreateForm = ({ accountList, setGroupMutation, openModal }) => {
  const intitialValue = {
    groupName: "", // 그룹 이름
    account: "", // 계좌 번호
    goal: "", // 목표 금액
    dues: "", // 월 회비
    duesDate: "", // 자동 이체를 할 날짜
    startDate: "", // 여행을 출발할 날짜
    limitMember: "", // 제한 인원
    money: "", // yen, yuan, dollar, euro, en ...
  };

  const [currentDate, setCurrentDate] = useState(new Date().toISOString().slice(0, 10));
  const [registForm, handleregistForm] = useForm(intitialValue);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registForm);
    // setGroupMutation.mutate(registForm);
  };
  return (
    <S.InputWrapper>
      <Form onSubmit={handleSubmit}>
        <S.SelectAccountBox>
          <S.CustomSelect
            variant="standard"
            inputProps={{
              name: "account",
            }}
            onChange={handleregistForm}
            sx={{
              backgroundColor: "white",
              fontSize: "1.6rem",
              ":hover": {
                backgroundColor: "inherit",
              },
            }}
          >
            <option value={""}>내 계좌</option>
            {accountList.map((account) => (
              <option key={account.accountId} value={account.accountId}>
                {account.accountId}
              </option>
            ))}
          </S.CustomSelect>
          <S.CreateAccountButton type="button" onClick={openModal}>
            계좌 생성
          </S.CreateAccountButton>
        </S.SelectAccountBox>
        <LabelInput labelTitle="모임 이름" inputType="text" inputName="groupName" handler={handleregistForm} />
        {/* <LabelInput labelTitle="계좌" inputType="text" inputName="account" handler={handleregistForm} /> */}

        <LabelInput labelTitle="목표금액" inputType="text" inputName="goal" handler={handleregistForm} />
        <LabelInput labelTitle="회비" inputType="text" inputName="dues" handler={handleregistForm} />
        <LabelInput
          labelTitle="자동이체일"
          inputType="date"
          inputName="duesDate"
          handler={handleregistForm}
          option={{ value: currentDate }}
        />
        <LabelInput
          labelTitle="여행예정일"
          inputType="date"
          inputName="startDate"
          handler={handleregistForm}
          option={{ value: currentDate, min: currentDate }}
        />
        <LabelInput labelTitle="참여인원" inputType="number" inputName="limitMember" handler={handleregistForm} />
        <LabelInput labelTitle="외화" inputType="text" inputName="money" handler={handleregistForm} />
        <S.NextButton type="submit" onClick={handleSubmit}>
          다음
        </S.NextButton>
      </Form>
    </S.InputWrapper>
  );
};

export default GroupCreateForm;
