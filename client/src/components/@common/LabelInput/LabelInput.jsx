import * as S from "./LabelInput.style";

const LabelInput = ({ labelTitle, inputType, inputName, handler, option }) => {
  // const op = option.toString();
  return (
    <S.LabelContainer>
      <S.InputLabel>{labelTitle}</S.InputLabel>
      <S.InputBox type={inputType} name={inputName} onChange={handler} {...option} />
    </S.LabelContainer>
  );
};

export default LabelInput;
