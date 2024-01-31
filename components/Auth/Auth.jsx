import React, { useEffect } from "react";
import { useAuth } from "../../contexts/authContext";
import { useRouter } from "next/navigation";

export default function Auth({ children }) {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, []);

  return children;
}
