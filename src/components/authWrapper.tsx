import React from "react";
import { Navigate, Outlet } from "react-router";

export default function AuthWrapper() {
  const isAuthenicate = true;
  if (isAuthenicate) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}
