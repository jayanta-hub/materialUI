// import { useSelector } from "react-redux";

const UseIsAuth = (): boolean => {
  // const UserInfo = useSelector((state: any) => state?.loginSlice?.userLoginInfo?.data?.token);
  const UserInfo = true;
  const isAuthenticated = !!UserInfo;
  return isAuthenticated;
};

export default UseIsAuth;
