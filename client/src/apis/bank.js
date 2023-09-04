import { axiosInstance } from "./index";

const bankAPI = {
  verifyAccount: (name, account) =>
    axiosInstance.post("/accounts/verification", { name, account }),

  transferAccount: () => axiosInstance.post("/accounts/verification"),

  createAccount: (userId) => axiosInstance.post("/accounts", { userId }),

  getAccountList: () => axiosInstance.get("/accounts"),

  getAccount: (accountId) => axiosInstance.get(`/accounts/${accountId}`),

  getExchangeRate: () => axiosInstance.get("/exchangeRate"),

  postExchangeRate: (groupId) =>
    axiosInstance.post(`/groups/${groupId}/exchange`),

  postCalculation: (groupId) =>
    axiosInstance.post(`/groups/${groupId}/calculation`),
};

export default bankAPI;
