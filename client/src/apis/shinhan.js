import { axiosInstance, axiosShinhanInstance } from "./index";

const shinhanAPI = {
  getExchangeStore: (request) => axiosInstance.post(`/search/branch/city`, request), // 환전 가능 지점
  getMoneyCode: (request) => axiosInstance.post(`/search/fx/currencycode`, request), // 통화 코드 목록
  getExchangeRate: (request) => axiosInstance.post(`/search/fx/discount-rate`, request), // 우대율
  getExpectedMoney: (request) => axiosInstance.post(`/exchange`, request), // 원화 예상 금액
  getExchangeRateByMoney: (request) => axiosInstance.post(`/search/fxrate/day`, request), // 통화별 환율
};

export default shinhanAPI;
