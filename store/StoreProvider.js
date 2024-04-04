"use client";
import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store";
import { onReload } from "./slices/userSlice";

const ChildComponent = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onReload());
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
