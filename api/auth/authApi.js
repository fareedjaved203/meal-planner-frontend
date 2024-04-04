import apiService from "../apiService";

export const loginUserApi = async (userData) => {
  try {
    const data = await apiService.request("/users/login", "POST", userData);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const logoutUserApi = async () => {
  try {
    const data = await apiService.request("/users/logout", "POST");
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const userDetailApi = async () => {
  try {
    const data = await apiService.request("/users/user", "GET");
    return data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const forgotPasswordApi = async (email) => {
  try {
    const data = await apiService.request(
      "/users/password/forgot",
      "POST",
      email
    );
    return data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const resetPasswordApi = async (email, resetId) => {
  try {
    const data = await apiService.request(
      `/users/password/reset/${resetId}`,
      "PUT",
      email
    );
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
