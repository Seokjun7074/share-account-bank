import * as S from "components/exchangeStore/StoreList/StoreList.style";

const StoreList = ({ stores, onListItemClick }) => {
  return (
    <S.ListItem>
      {stores.map((store, index) => (
        <S.StoreItem key={index} onClick={() => onListItemClick(store)}>
          <S.LogoImg src={process.env.PUBLIC_URL + "/image/shinhan.png"} alt="Shinhan Logo" />
          <S.InfoContainer>
            <span>{store.place_name}</span>
            <S.AddressSpan>{store.address_name}</S.AddressSpan>
          </S.InfoContainer>
        </S.StoreItem>
      ))}
    </S.ListItem>
  );
};

export default StoreList;
