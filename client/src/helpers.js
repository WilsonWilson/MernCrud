// save login  reponse > (user's name and token) to session storage
export const authenticate = (response, next) => {
  if (window !== "undefined") {
    // console.log('authenticate', response)
    window.localStorage.setItem("token", JSON.stringify(response.data.token));
    window.localStorage.setItem("user", JSON.stringify(response.data.name));
  }
  next();
};

// access token name from session storage
export const getToken = () => {
  if (window !== "undefined") {
    if (window.localStorage.getItem("token")) {
      return JSON.parse(window.localStorage.getItem("token"));
    } else {
      return false;
    }
  }
};

// access user name from session storage
export const getUser = () => {
  if (window !== "undefined") {
    if (window.localStorage.getItem("user")) {
      return JSON.parse(window.localStorage.getItem("user"));
    } else {
      return false;
    }
  }
};

// remove token from session storage
export const logout = (next) => {
  if (window !== "undefined") {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
  }
  next();
};

// export default authenticate;
