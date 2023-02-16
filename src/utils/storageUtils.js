export const getToken = () => localStorage.getItem("authToken");

export const getUser = () => {
  const accessToken = getToken();

  if (accessToken) {
    const userJson = accessToken.split(".").splice(1, 1).map(atob).map(JSON.parse)[0].user;

    if (userJson !== undefined && userJson !== null && userJson !== "") {
      return JSON.parse(userJson);
    }
  }

  return undefined;
};

export const getObjectFromLocalStorage = (fieldName) => {
  try {
    return JSON.parse(localStorage.getItem(fieldName));
  } catch (error) {
    console.error(error);
  }

  return undefined;
};

export const storeObjectInLocalStorage = (fieldName, value) => {
  localStorage.setItem(fieldName, JSON.stringify(value));
};
