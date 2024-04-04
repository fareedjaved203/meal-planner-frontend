"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginProtectedRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = window.localStorage.getItem("user");

      if (!user) {
        router.push("/login");
      }
    }
  }, []);

  return <>{children}</>;
};

export default LoginProtectedRoute;
