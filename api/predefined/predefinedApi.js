import apiService from "../apiService";

export const postPredefinedApi = async (itemData) => {
  try {
    console.log(itemData);
    const data = await apiService.request(
      "/predefined/predefined",
      "POST",
      itemData
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPredefinedApi = async (id) => {
  try {
    const data = await apiService.request(
      `/predefined/predefined/${id}`,
      "GET"
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deletePredefinedApi = async (id, predefinedId) => {
  try {
    const data = await apiService.request(
      `/predefined/predefined/${id}/${predefinedId}`,
      "DELETE"
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
