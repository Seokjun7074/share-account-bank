import { axiosInstance, accountTokenAxiosInstance } from "./index";

const userAPI = {
  signup: (signupForm) => accountTokenAxiosInstance.post("/signup", signupForm),

  login: (loginForm) => axiosInstance.post("/login", loginForm),

  signout: () => axiosInstance.delete("/signout"),

  getMyInformation: () => axiosInstance.get("/users"),

  editMyInformation: (phone, currentPassword, newPassword, newPasswordCheck) =>
    axiosInstance.put("/users", {
      phone,
      currentPassword,
      newPassword,
      newPasswordCheck,
    }),

  logout: () => axiosInstance.post("/logout"),

  editPassword: (id, name, password, passwordCheck) =>
    accountTokenAxiosInstance.put("/password", { id, name, password, passwordCheck }),
};

export default userAPI;
