export const setMoneyRegex = (money) => {
  return Number(
    money
      .toString()
      .replace(/[^0-9]/g, "")
      .replaceAll(",", ""),
  ).toLocaleString();
};

export const setPhoneRegex = (phone) => {
  return phone
    .replace(/[^0-9]/g, "")
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
    .replace(/(\-{1,2})$/g, "");
  // maxlength : 13
};
export const setAccountRegex = (account) => {
  return account
    .replace(/[^0-9]/g, "")
    .replace(/^(\d{0,3})(\d{0,3})(\d{0,6})$/g, "$1-$2-$3")
    .replace(/(\-{1,2})$/g, "");
  // maxlength : 14
};

export const replaceDash = (str) => {
  return str.replace(/-/g, "");
};

export const replaceComma = (str) => {
  return str.replace(/,/g, "");
};
