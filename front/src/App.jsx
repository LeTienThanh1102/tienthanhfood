import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import Cart from "./compontents/cart/Cart";
import InFor from "./compontents/information/InFor";
import Layout from "./compontents/layout/Layout";
import Login from "./compontents/login/Login";
import Sale from "./compontents/sales/Sale";
import { CartContext } from "./compontents/Context/CartContext";
import { useState } from "react";
import Register from "./compontents/register/Register";
import Product from "./compontents/product/Product";
import { useSelector } from "react-redux";
import Profile from "./page/profile/Profile";
import "react-toastify/dist/ReactToastify.css";
import New from "./page/new/New";
import Flash from "./page/flashsale/Flash";
import Purchase from "./compontents/purchase/Purchase";

function App() {
  const [addCart, setCartAdd] = useState([]);
  const [total, setTotal] = useState(0);
  const isAuthen = useSelector((state) => state.user.isAuthenticated);
  return (
    <CartContext.Provider value={{ addCart, setCartAdd, total, setTotal }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route
            path="/login"
            element={isAuthen ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/sale" element={<Sale />} />
          <Route path="/flash" element={<Flash />} />
          <Route path="/infor" element={<InFor />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/thucpham" element={<Product />} />
          <Route path="/new" element={<New></New>}></Route>
          <Route path="/purchase" element={<Purchase></Purchase>}></Route>
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
