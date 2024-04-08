import apiService from "../apiService";
import { useDispatch } from "react-redux";
import { onSave } from "../../store/slices/orderSlice";

const dispatch = useDispatch();

export const postOrderApi = async (orderData) => {
  try {
    const data = await apiService.request("/orders/order", "POST", orderData);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const getOrdersApi = async () => {
  try {
    const data = await apiService.request("/orders/order", "GET");
    console.log(data);
    // dispatch(onSave(data.data))
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const getSingleOrderApi = async (id) => {
  try {
    const data = await apiService.request(`/orders/order/${id}`, "GET");
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
