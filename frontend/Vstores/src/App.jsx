import "./App.css";
import CheckAuth from "./components/Common/Checkauth.jsx";
import { Routes, Route } from "react-router-dom";
import Authlayout from "./components/auth/AuthLayout.jsx";
import Login from "./Pages/auth/Login.jsx";
import Register from "./Pages/auth/Register.jsx";
import AdminLayout from "./components/admin-view/Layout.jsx";
import AdminDashboard from "./Pages/admin-view/Dashboard.jsx";
import AdminProducts from "./Pages/admin-view/Products.jsx";
import AdminFeatures from "./Pages/admin-view/Features";
import AdminOrders from "./Pages/admin-view/Orders.jsx";
import NotFound from "./Pages/auth/NotFound.jsx";
import ShoppingLayout from "./components/shopping-view/ShoppingLayout.jsx";
import AccountPage from "./Pages/shopping view/AccountPage.jsx";
import Checkout from "./Pages/shopping view/Checkout.jsx";
import Listing from "./Pages/shopping view/Listing.jsx";
import ShoppingHome from "./Pages/shopping view/Home";
import UnAuthPage from './Pages/auth/UnAuthPage.jsx'

function App() {
  const isAuthenticated = false;
  const user =null;
  return (
    <>
      <div className="flex flex-col overflow-hidden bg-red-300">
        <Routes>
          <Route
            path="/auth"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <Authlayout />
              </CheckAuth>
            }
          >
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

          </Route>

          <Route
            path="/admin"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <AdminLayout />
              </CheckAuth>
            }
          >
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="features" element={<AdminFeatures />} />
           
          </Route>

          <Route
            path="/shop"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <ShoppingLayout />
              </CheckAuth>
            }
          >
            <Route path="account" element={<AccountPage />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="listing" element={<Listing />} />
            <Route path="home" element={<ShoppingHome />} />
           
            
          </Route>
          
          <Route path="unauth-page" element={<UnAuthPage/>}/>
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </div>
    </>
  );
}

export default App;
