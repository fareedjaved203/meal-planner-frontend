"use client";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  return <>{children}</>;
};

export default LoginProtectedRoute;
