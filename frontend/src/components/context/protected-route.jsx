import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};


export default ProtectedRoute;