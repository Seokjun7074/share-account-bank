export const checkValidatation = (requestData) => {
  const check = Object.keys(requestData).find((key) => requestData[key].length === 0);
  if (check === undefined) return true;
  return false;
};
