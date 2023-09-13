import React, { useEffect } from "react";
import * as S from "./StoreMap.style";
import { toastSuccess } from "utils/toast";

const StoreMap = ({ x, y, text, onClose }) => {
  useEffect(() => {
    const { kakao } = window;
    const mapContainer = document.getElementById("modalMap");
    var markerPosition = new kakao.maps.LatLng(y, x);

    var marker = {
      position: markerPosition,
      text: text,
    };
    const mapOption = {
      center: new kakao.maps.LatLng(y, x),
      level: 3,
      marker: marker,
    };

    new kakao.maps.StaticMap(mapContainer, mapOption);

    return;
  }, [x, y]);

  const handleExcgange = () => {
    toastSuccess("환전 신청이 완료 되었습니다.");
    onClose();
  };

  return (
    <S.StoreModlaWrapper>
      <S.MapContainer id="modalMap"></S.MapContainer>
      <S.ModalButtonWrapper>
        <S.LeftButton onClick={onClose}>닫기</S.LeftButton>
        <S.RightButton onClick={handleExcgange}>신청</S.RightButton>
      </S.ModalButtonWrapper>
    </S.StoreModlaWrapper>
  );
};

export default StoreMap;
