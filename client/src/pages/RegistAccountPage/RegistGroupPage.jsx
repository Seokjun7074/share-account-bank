import useForm from "hooks/useForm";
import * as S from "./RegistGroupPage.style";
import { useSetGroupMutation } from "hooks/apiHook/useSetGroupMutation";

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
        <form onSubmit={handleSubmit}>
          <S.InputBox
            placeholder="모임 이름"
            type="text"
            name="groupName"
            onChange={handleregistForm}
            required
          />
          <S.InputBox
            placeholder="계좌"
            type="email"
            name="account"
            onChange={handleregistForm}
          />
          <S.InputBox
            placeholder="목표금액"
            type="text"
            name="goal"
            onChange={handleregistForm}
          />
          <S.InputBox
            placeholder="회비"
            type="text"
            name="dues"
            onChange={handleregistForm}
          />
          <div>자동이체일</div>
          <S.InputBox
            placeholder="자동이체일"
            type="date"
            name="duesDate"
            onChange={handleregistForm}
          />
          <div>여행예정일</div>
          <S.InputBox
            placeholder="여행예정일"
            type="date"
            name="startDate"
            onChange={handleregistForm}
          />
          <S.InputBox
            placeholder="참여인원"
            type="number"
            name="limitMember"
            onChange={handleregistForm}
          />
          <S.InputBox
            placeholder="외화"
            type="text"
            name="money"
            onChange={handleregistForm}
          />
          <S.NextButton type="submit" onClick={handleSubmit}>
            다음
          </S.NextButton>
        </form>
      </S.InputWrapper>
    </S.RegistGroupPageWrapper>
  );
};
export default RegistGroupPage;
