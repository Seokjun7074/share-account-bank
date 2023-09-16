import { useState, useEffect } from "react";
import StoreList from "components/exchangeStore/StoreList/StoreList";
import StoreMap from "components/exchangeStore/Map/StoreMap";
import SearchBar from "components/exchangeStore/SearchBar/SearchBar";
import * as S from "pages/ExchangeMoneyStorePage/ExchangeMoneyStorePage.style";
import useModal from "hooks/useModal";
import Modal from "components/@common/Modal/Modal";

const ExchangeMoneyStorePage = () => {
  const [info, setInfo] = useState();
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [location, setLocation] = useState();
  const [stores, setStores] = useState([]);
  const [where, setWhere] = useState();

  const { openModal, closeModal } = useModal();

  const search = (word) => {
    const { kakao } = window;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(word + " 신한은행", (result, status, _pagination) => {
      const newStores = [];
      result.forEach((store) => newStores.push(store));
      setStores(newStores);
      return newStores;
    });
  };

  const handleListItemClick = (store) => {
    openModal();
    setInfo(store);
  };

  const handleLocationChange = (event) => {
    setWhere(event.target.value);
  };

  const handleSearchIconClick = (e) => {
    e.preventDefault();
    search(where);
  };

  useEffect(() => {
    const { kakao } = window;
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLat(latitude);
          setLng(longitude);
        },
        (error) => {
          console.error("Error getting user location:", error);
        },
      );
    } else {
      console.log("Geolocation is not available in this browser.");
    }

    var geocoder = new kakao.maps.services.Geocoder();

    geocoder.coord2Address(lng, lat, async (e) => {
      setLocation(e[0]?.address.region_3depth_name);
    });
  });

  useEffect(() => {
    const { kakao } = window;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(location + " 신한은행", (result, status, _pagination) => {
      const newStores = [...stores];
      result.forEach((item, idx) => newStores.push(result[idx]));
      setStores(newStores);
    });
  }, [location]);

  return (
    <>
      <S.MoneyStroeWrapper>
        <SearchBar value={where} onChange={handleLocationChange} onSearch={handleSearchIconClick}></SearchBar>
        {location ? (
          <StoreList stores={stores} onListItemClick={handleListItemClick} />
        ) : (
          <h2>지점 정보 불러오는 중..</h2>
        )}
      </S.MoneyStroeWrapper>
      <Modal>
        <StoreMap x={info?.x} y={info?.y} text={info?.place_name} onClose={closeModal} />
      </Modal>
    </>
  );
};

export default ExchangeMoneyStorePage;
