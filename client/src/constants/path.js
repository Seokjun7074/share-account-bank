export const PATH = {
  ROOT: "/",
  INTRO_PAGE: "/intro",
  SIGNUP_PAGE: "/signup",
  LOGIN_PAGE: "/login",
  ACCOUNT_PAGE: (groupId) => `/account/:${groupId}`,
  REGIST_GROUP_PAGE: "/regist-account",
  DEPOSIT_PAGE: (groupId) => `/deposit/:${groupId}`,
  TRAVEL_INFO_PAGE: (groupId) => `/travelInfo/:${groupId}`,
  INVITATION_PAGE: (groupId) => `/invite/:${groupId}`,
  EXCHANGE_PAGE: (groupId) => `/exchange/:${groupId}`,
  CALCULATION_PAGE: (groupId) => `/calculation/:${groupId}`,
};
