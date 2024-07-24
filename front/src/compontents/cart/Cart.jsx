import { CartContext } from "../Context/CartContext";
import { useContext, useState } from "react";
import "./cart.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useEffect } from "react";
import { getProductCart, orderProduct, removeProductToCart } from "../../service/apiService";
import { useSelector } from "react-redux";
function Cart() {
  // const { addCart, total, setCartAdd, setTotal } = useContext(CartContext);
  const [cart, setCart] = useState([]);
  const account = useSelector((state) => state.user.account);
  const userId = account.id;
  const address = account.address;
  useEffect(() => {
    getProductToCart();
  }, []);
  const getProductToCart = async () => {
    const res = await getProductCart(userId);
    if (res) {
      setCart(res.items);
    }
  };
  const tinh = cart ? cart
    .map((item) => item.quantity * parseInt(item.product.price, 10))
    .reduce((acc, cur) => acc + cur, 0): 0;
  const handleDelete = async (productId) => {
    const res = await removeProductToCart(userId, productId);
    if (res) {
      setCart(cart.filter((item) => item.product._id !== productId));
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOrderbyProduct =async(productId, price, quantity)=>{
    const res=await orderProduct(userId,productId, quantity,price,tinh, address);
    console.log(res);
    if(res){
      handleDelete(productId);
    }
  }
  return (
    <div className="cart__vip">
      <Header />
      <div className="cart">
        <div className="cart_logo">
          <img
            src="https://seeklogo.com/images/F/food-logo-59E5A73AFD-seeklogo.com.png"
            alt=""
            className="cart__logo__img"
          />
        </div>
        <div className="cart__body">
          <div className="cart__header">Check-Out</div>
          <div className="cart__pro">
            {cart?.map((item, index) => (
              <div key={index}>
                <div className="cart_list">
                  <div className="cart__img">
                    <img
                      className="cart__img_anh"
                      src={`data:image/jpeg;base64,${item.product.image}`}
                      alt=""
                    />
                  </div>
                  <div className="cart_info">
                    <div className="cart__store">
                      <span style={{ fontSize: "1.6rem" }}>Tên món: </span>
                      {item?.product?.name}
                    </div>
                    <div className="cart__name1">
                      Món ăn:
                      <span>{item?.product?.description}</span>
                    </div>
                    <div className="cart__price">
                      <span
                        style={{ fontSize: "1.6rem", padding: "0 12px 0 0" }}
                      >
                        Giá Bán:{" "}
                      </span>
                      {item?.product?.price} $
                      <div className="cart_price">
                        <span
                          style={{ fontSize: "1.6rem", padding: "0 12px 0 0" }}
                        >
                          Số lượng:{" "}
                        </span>
                        {item?.quantity}
                      </div>
                    </div>
                  </div>
                  <div
                    className="cart__clear"
                    onClick={() => handleDelete(item.product._id)}
                  >
                    <FontAwesomeIcon
                      className="cart_icon_close"
                      icon={faXmark}
                    />
                  </div>
                  <button className="order-buy-one-product" onClick={()=> handleOrderbyProduct(item.product._id,item.product.price, item.quantity)}>Đặt hàng</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart__total">
                  <div className="tong">TOTAL: {tinh} $</div>
                  
                </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
