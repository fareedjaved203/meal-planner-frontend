import apiService from "../apiService";

export const postItemApi = async (itemData) => {
  try {
    const data = await apiService.request("/items/item", "POST", itemData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getItemsApi = async () => {
  try {
    const data = await apiService.request("/items/items", "GET");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleItemApi = async (id) => {
  try {
    const data = await apiService.request(`/items/item/${id}`, "GET");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateItemApi = async (id, itemData) => {
    try {
      const data = await apiService.request(`/items/item/${id}`, "PUT", itemData);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
