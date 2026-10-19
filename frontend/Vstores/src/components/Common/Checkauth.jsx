import { Navigate, useLocation } from "react-router-dom";

const CheckAuth = ({ isAuthenticated, user, children }) => {
  const location = useLocation();

  const isLoginPage = location.pathname.includes("/login");
  const isRegisterPage = location.pathname.includes("/register");

  // 1. Redirect unauthenticated users to login
  if (!isAuthenticated && !isLoginPage && !isRegisterPage) {
    return <Navigate to="/auth/login" replace />;
  }

  // 2. Redirect authenticated users away from login/register
  if (isAuthenticated && (isLoginPage || isRegisterPage)) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" replace />;
    } else {
      return <Navigate to="/shop/home" replace />;
    }
  }

  // 3. Block non-admin users from admin routes
  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("/admin")
  ) {
    return <Navigate to="/unauth-page" replace />;
  }

  // 4. Block admins from shopping routes
  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes("/shop")
  ) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  // 5. Render the permitted page
  return <>{children}</>;
};

export default CheckAuth;