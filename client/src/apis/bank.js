import { axiosInstance } from "./index";

const bankAPI = {
  verifyAccount: (name, account) =>
    axiosInstance.post("/accounts/verification", { name, account }),

  transactAccount: (sender, receiver, amount) =>
    axiosInstance.post("/accounts/transactions", { sender, receiver, amount }),

  depositAccount: (userId, amount) => axiosInstance.post("/accounts/deposit", { userId, amount }),

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
