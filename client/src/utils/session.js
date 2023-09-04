export const getSession = (key) => sessionStorage.getItem(key);

export const setSesstion = (key, value) => {
  sessionStorage.setItem(key, value);
};
