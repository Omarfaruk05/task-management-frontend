/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate } from "react-router-dom";
import { getUserInfo } from "../services/auth.service";

const Auth = ({ children }: any) => {
  const { email }: any = getUserInfo();

  if (!email) {
    <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default Auth;
