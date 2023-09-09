import { axiosInstance } from "./index";

const bankAPI = {
  verifyAccount: (name, account) => axiosInstance.post("/accounts/verification", { name, account }),

  transactAccount: (transactionData) => axiosInstance.post("/accounts/transactions", transactionData),

  depositAccount: (userId, amount) => axiosInstance.post("/accounts/deposit", { userId, amount }),

  transferAccount: () => axiosInstance.post("/accounts/verification"),

  createAccount: (userId) => axiosInstance.post("/accounts", { userId }),

  getAccountList: () => axiosInstance.get("/accounts"),

  getAccount: (accountNumber) => axiosInstance.get(`/accounts/${accountNumber}`),

  getExchangeRate: () => axiosInstance.get("/exchangeRate"),

  postExchangeRate: (groupId) => axiosInstance.post(`/groups/${groupId}/exchange`),

  postCalculation: (groupId) => axiosInstance.post(`/groups/${groupId}/calculation`),

  setMainAccount: (accountId) => axiosInstance.post("/accounts/main", { accountId }),
};

export default bankAPI;
