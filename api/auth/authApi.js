import apiService from "../apiService";

export const registerUserApi = async (userData) => {
  try {
    const data = await apiService.request("/register", "POST", userData);
    return data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const loginUserApi = async (userData) => {
  try {
    const data = await apiService.request("/login", "POST", userData);
    return data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const logoutUserApi = async () => {
  try {
    const data = await apiService.request("/logout", "POST");
    return data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const userDetailApi = async () => {
  try {
    const data = await apiService.request("/user", "GET");
    return data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const forgotPasswordApi = async (email) => {
  try {
    const data = await apiService.request("/password/forgot", "POST", email);
    return data;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const resetPasswordApi = async (email, resetId) => {
  try {
    const data = await apiService.request(
      `/password/reset/${resetId}`,
      "PUT",
      email
    );
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
