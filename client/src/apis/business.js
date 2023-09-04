import { axiosInstance } from "./index";

const businessAPI = {
  getGroup: (groupId) => axiosInstance.get(`/groups/${groupId}`),

  editGroupInformation: (groupId, groupName, goal, startDate) =>
    axiosInstance.put(`/groups/${groupId}`, {
      groupName,
      goal,
      startDate,
    }),

  joinGroup: (groupId, url) => axiosInstance.post(`/groups/${groupId}`, { url }),

  approveJoinGroup: (groupId, id) => axiosInstance.post(`/groups/${groupId}/approval/join`, { id }),

  setGroup: (groupName, account, goal, dues, duesDate, startDate, limitMember, money) =>
    axiosInstance.post("/groups", {
      groupName,
      account,
      goal,
      dues,
      duesDate,
      startDate,
      limitMember,
      money,
    }),

  makeJoinLink: (groupId) => axiosInstance.get(`/groups/${groupId}/link`),

  enterJoinLink: (linkId) => axiosInstance.get(`/link/${linkId}`),

  exitJoinLink: (groupId) => axiosInstance.post(`/groups/${groupId}/exit`),

  approveExitGroup: (groupId, id) => axiosInstance.post(`/groups/${groupId}/approval/exit`, { id }),

  deleteGroup: (groupId) => axiosInstance.delete(`/groups/${groupId}`),

  getNotificationList: () => axiosInstance.get("/notifications"),

  postNotificationList: (groupId) => axiosInstance.post(`/groups/${groupId}/notification`),

  startTravel: (groupId) => axiosInstance.post(`/groups/${groupId}/travel`),
};
export default businessAPI;
