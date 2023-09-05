import useForm from "hooks/useForm";
import * as S from "./RegistGroupPage.style";
import { useSetGroupMutation } from "hooks/apiHook/useSetGroupMutation";
import { Form } from "components/@common/Form/Form";
import { useEffect, useState } from "react";

const RegistGroupPage = () => {
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
  const setGroupMutation = useSetGroupMutation();

  const handleSubmit = () => {
    console.log(registForm);
    setGroupMutation.mutate(registForm);
  };

  return (
    <S.RegistGroupPageWrapper>
      <S.RegistGroupText>모임통장 만들기</S.RegistGroupText>
      <S.InputWrapper>
        <Form onSubmit={handleSubmit}>
          <S.LabelContainer>
            <S.InputLabel>모임 이름</S.InputLabel>
            <S.InputBox type="text" name="groupName" onChange={handleregistForm} required />
          </S.LabelContainer>
          <S.LabelContainer>
            <S.InputLabel>계좌</S.InputLabel>
            <S.InputBox type="email" name="account" onChange={handleregistForm} />
          </S.LabelContainer>
          <S.LabelContainer>
            <S.InputLabel>목표금액</S.InputLabel>
            <S.InputBox type="text" name="goal" onChange={handleregistForm} />
          </S.LabelContainer>
          <S.LabelContainer>
            <S.InputLabel>회비</S.InputLabel>
            <S.InputBox type="text" name="dues" onChange={handleregistForm} />
          </S.LabelContainer>
          <S.LabelContainer>
            <S.InputLabel>자동이체일</S.InputLabel>
            <S.InputBox
              placeholder="자동이체일"
              type="date"
              value={currentDate}
              name="duesDate"
              onChange={handleregistForm}
            />
          </S.LabelContainer>
          <S.LabelContainer>
            <S.InputLabel>여행예정일</S.InputLabel>
            <S.InputBox
              placeholder="여행예정일"
              type="date"
              value={currentDate}
              min={currentDate}
              name="startDate"
              onChange={handleregistForm}
            />
          </S.LabelContainer>
          <S.LabelContainer>
            <S.InputLabel>참여인원</S.InputLabel>
            <S.InputBox type="number" min="1" name="limitMember" onChange={handleregistForm} />
          </S.LabelContainer>
          <S.LabelContainer>
            <S.InputLabel>외화</S.InputLabel>
            <S.InputBox type="text" name="money" onChange={handleregistForm} />
          </S.LabelContainer>
          <S.NextButton type="submit" onClick={handleSubmit}>
            다음
          </S.NextButton>
        </Form>
      </S.InputWrapper>
    </S.RegistGroupPageWrapper>
  );
};
export default RegistGroupPage;
