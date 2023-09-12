import { useState } from "react";
import LabelInput from "components/@common/LabelInput/LabelInput";
import useForm from "hooks/useForm";
import * as S from "./GroupCreateForm.style";
import { Form } from "components/@common/Form/Form";
import { moneyName } from "constants/money";
import { MdAirplanemodeActive } from "react-icons/md";
import { replaceComma, setMoneyRegex } from "utils/regex";

const GroupCreateForm = ({ accountList, setGroupMutation }) => {
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
  const [flag, setFlag] = useState("");
  const [registForm, handleregistForm] = useForm(intitialValue);
  const handleSubmit = (e) => {
    e.preventDefault();
    const requestData = { ...registForm, dues: replaceComma(registForm.dues), goal: replaceComma(registForm.goal) };
    setGroupMutation.mutate(requestData);
  };

  const handleFlag = (event) => {
    handleregistForm(event);
    setFlag(moneyName[event.target.value]);
  };

  return (
    <S.InputWrapper>
      <Form onSubmit={handleSubmit}>
        <S.SelectAccountBox>
          <S.CustomSelect onChange={handleregistForm} name="account">
            <option value={""}>내 계좌</option>
            {accountList.map((account) => (
              <option key={account.accountId} value={account.accountId}>
                {account.accountId}
              </option>
            ))}
          </S.CustomSelect>
          {/* <S.CreateAccountButton type="button" onClick={openModal}>
            계좌 생성
          </S.CreateAccountButton> */}
        </S.SelectAccountBox>
        <LabelInput labelTitle="모임 이름" inputType="text" inputName="groupName" handler={handleregistForm} />

        <LabelInput
          labelTitle="목표금액"
          inputType="text"
          inputName="goal"
          handler={handleregistForm}
          option={{
            value: setMoneyRegex(registForm.goal),
          }}
        />
        <LabelInput
          labelTitle="회비"
          inputType="text"
          inputName="dues"
          handler={handleregistForm}
          option={{
            value: setMoneyRegex(registForm.dues),
          }}
        />
        <LabelInput
          labelTitle="자동이체일"
          inputType="number"
          inputName="duesDate"
          handler={handleregistForm}
          option={{ min: 1, max: 28 }}
        />
        <LabelInput
          labelTitle="여행예정일"
          inputType="date"
          inputName="startDate"
          handler={handleregistForm}
          option={{ min: currentDate }}
        />
        <LabelInput labelTitle="참여인원" inputType="number" inputName="limitMember" handler={handleregistForm} />
        <S.SelectAccountBox>
          <S.InputLabel>외화</S.InputLabel>
          <S.FlagContainer>
            {!flag ? (
              <MdAirplanemodeActive size={"2rem"} />
            ) : (
              <S.CountryFlagImage src={process.env.PUBLIC_URL + `/flag/${flag}.png`} />
            )}
            <select onChange={handleFlag} name="money">
              <option defaultValue={null}>화폐선택</option>
              {Object.keys(moneyName).map((money) => (
                <option key={money} value={money}>
                  {moneyName[money]}
                </option>
              ))}
            </select>
          </S.FlagContainer>
        </S.SelectAccountBox>
        <S.NextButton type="submit" onClick={handleSubmit}>
          다음
        </S.NextButton>
      </Form>
    </S.InputWrapper>
  );
};

export default GroupCreateForm;
