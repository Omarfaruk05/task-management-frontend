/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactNode } from "react";
import { getUserInfo } from "../services/auth.service";
import { Navigate } from "react-router-dom";

const Auth = ({ children }: { children: ReactNode }) => {
  const { email }: any = getUserInfo();

  return email ? <>{children}</> : <Navigate to="/login" />;
};

export default Auth;
