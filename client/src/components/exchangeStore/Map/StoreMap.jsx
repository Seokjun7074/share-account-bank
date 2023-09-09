import React, { useEffect } from "react";
import { LeftButton, RightButton, ModalButtonWrapper } from "./StoreMap.style";

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

    const map = new kakao.maps.StaticMap(mapContainer, mapOption);

    return;
  }, [x, y]);

  return (
    <div className="modal">
      <div className="modal-content">
        <div id="modalMap" style={{ width: "100%", height: "300px" }}></div>
        <ModalButtonWrapper>
          <LeftButton onClick={onClose}>닫기</LeftButton>
          <RightButton onClick={onClose}>신청</RightButton>
        </ModalButtonWrapper>
      </div>
    </div>
  );
};

export default StoreMap;
