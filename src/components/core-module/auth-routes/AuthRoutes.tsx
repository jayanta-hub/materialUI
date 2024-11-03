import { Navigate, Outlet } from "react-router-dom";

function AuthRoutes() {
  const isAuth = true;
  return isAuth ? <Outlet /> : <Navigate to="/" />;
}

export default AuthRoutes;
