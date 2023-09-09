import { axiosInstance } from "./index";

const businessAPI = {
  getGroup: (groupId) => axiosInstance.get(`/groups/${groupId}`),

  getGroupList: () => axiosInstance.get("/groups"),

  editGroupInformation: (groupId, editGroupData) => axiosInstance.put(`/groups/${groupId}`, { ...editGroupData }),

  joinGroup: (groupId, url) => axiosInstance.post(`/groups/${groupId}`, { url }),

  approveJoinGroup: (groupId, id) => axiosInstance.post(`/groups/${groupId}/approval/join`, { id }),

  setGroup: (setGroupData) => axiosInstance.post("/groups", { ...setGroupData }),

  makeJoinLink: (groupId) => axiosInstance.post(`/groups/${groupId}/link`),

  enterJoinLink: (linkId) => axiosInstance.get(`/link/${linkId}`),

  exitJoinLink: (groupId) => axiosInstance.post(`/groups/${groupId}/exit`),

  approveExitGroup: (groupId, id) => axiosInstance.post(`/groups/${groupId}/approval/exit`, { id }),

  deleteGroup: (groupId) => axiosInstance.delete(`/groups/${groupId}`),

  getNotificationList: () => axiosInstance.get("/notifications"),

  postNotificationList: (groupId) => axiosInstance.post(`/groups/${groupId}/notification`),

  startTravel: (groupId) => axiosInstance.post(`/groups/${groupId}/travel`),

  finishTravel: (groupId) => axiosInstance.get(`/groups/${groupId}/travel`),

  postTravelComment: (groupId, comment) => axiosInstance.post(`/groups/${groupId}/comment`, { comment }),
};
export default businessAPI;
