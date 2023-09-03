import { axiosInstance, accountTokenAxiosInstance } from "./index";

const userAPI = {
  signup: (id, account, phone, name, password, passwordCheck) =>
    accountTokenAxiosInstance.post("/signup", { id, account, phone, name, password, passwordCheck }),

  signout: () => axiosInstance.delete("/signout"),

  getMyInformation: () => axiosInstance.get("/users"),

  editMyInformation: (phone, currentPassword, newPassword, newPasswordCheck) =>
    axiosInstance.put("/users", {
      phone,
      currentPassword,
      newPassword,
      newPasswordCheck,
    }),

  login: (id, password) => axiosInstance.post("/login", { id, password }),

  logout: () => axiosInstance.post("/logout"),

  editPassword: (id, name, password, passwordCheck) =>
    accountTokenAxiosInstance.put("/password", { id, name, password, passwordCheck }),
};

export default userAPI;
