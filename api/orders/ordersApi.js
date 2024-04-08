import apiService from "../apiService";

export const postOrderApi = async (orderData) => {
  try {
    const data = await apiService.request("/orders/order", "POST", orderData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getOrdersApi = async () => {
  try {
    const data = await apiService.request("/orders/order", "GET");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleOrderApi = async (id) => {
  try {
    const data = await apiService.request(`/orders/order/${id}`, "GET");
    return data;
  } catch (error) {
    console.log(error);
  }
};
