import Barcode from "components/@common/Barcode/Barcode";
import * as S from "components/@common/Receipt/Receipt.style";
import { setMoneyRegex } from "utils/regex";

const Receipt = ({}) => {
  // console.log(accountData);
  const accountData = {
    accountId: "110-123-123456",
    balance: 370000,
    historyList: [
      {
        time: "2023-09-06",
        sender: "할매순대국",
        receiver: "나",
        amount: 9000,
        type: "send",
      },
      {
        time: "2023-09-07",
        sender: "GS25",
        receiver: "나",
        amount: 5600,
        type: "send",
      },
    ],
  };

  const setPlusMinus = (amount, type) => {
    if (type === "send") return "- " + amount;
    if (type === "received") return "+ " + amount;
  };

  return (
    <S.ReceiptWrapper>
      <S.ReceiptTitle>Receipt</S.ReceiptTitle>
      <S.ReceiptHeader>
        <h2>{accountData.accountId}</h2>
        잔액 {setMoneyRegex(accountData.balance)}원
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
    </S.ReceiptWrapper>
  );
};
export default Receipt;
