"use client";
import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store";
import { onReload } from "./slices/userSlice";
import { onSave } from "./slices/orderSlice";
import { getOrdersApi } from "@/api/orders/ordersApi";

const ChildComponent = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onReload());
    // const orders = async () => {
    //   const data = await getOrdersApi();
    //   if (data) {
    //     dispatch(onSave(data.orders));
    //   }
    // };
    // orders();
  }, []);

  return <>{children}</>;
};

export const StoreProvider = ({ children }) => {
  return (
    <Provider store={store()}>
      <ChildComponent>{children}</ChildComponent>
    </Provider>
  );
};
