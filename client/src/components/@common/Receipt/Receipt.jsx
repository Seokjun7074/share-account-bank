import Barcode from "components/@common/Barcode/Barcode";
import * as S from "components/@common/Receipt/Receipt.style";
import { setMoneyRegex } from "utils/regex";

const Receipt = ({ accountData, children }) => {
  // console.log(accountData);

  const setPlusMinus = (amount, type) => {
    if (type === "send") return "- " + amount;
    if (type === "received") return "+ " + amount;
  };

  return (
    <S.ReceiptWrapper>
      <S.ReceiptTitle>Receipt</S.ReceiptTitle>
      <S.ReceiptHeader>
        <h2>{accountData.accountId}</h2>
        <span>잔액 {setMoneyRegex(accountData.balance)}원</span>
        {children}
      </S.ReceiptHeader>
      <S.ReceiptContentContainer>
        <S.ReceiptContent>
          <S.ReceiptCol>
            <span>거래처</span>
            <span>금액</span>
          </S.ReceiptCol>
        </S.ReceiptContent>
        {accountData.historyList.map((data, idx) => (
          <S.ReceiptContent key={idx}>
            <span>{data.sender}</span>
            <span>{setPlusMinus(setMoneyRegex(data.amount), data.type)}</span>
          </S.ReceiptContent>
        ))}
      </S.ReceiptContentContainer>
      <S.ImageContainer>
        <S.PaidIcon src={process.env.PUBLIC_URL + "/image/paid.png"} />
      </S.ImageContainer>
      <Barcode />
      {accountData.startDate && accountData.endDate ? (
        <S.NumberList>
          {accountData.startDate}~{accountData.endDate}
        </S.NumberList>
      ) : null}
    </S.ReceiptWrapper>
  );
};
export default Receipt;
