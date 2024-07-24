import "./order.scss";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { addToCart } from "../../service/apiService";
import { useSelector } from "react-redux";
function Order({ show, setShow, product }) {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState();
  const [color, setColor] = useState(0);
  const account=useSelector((state)=>state.user.account);
  const userId=account.id;
  useEffect(() => {
    setPrice(product?.price);
    setQuantity(1);
  }, [product]);
  const handleColor = (e) => {
    setColor(e);
  };
  const handeIncret = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setPrice(product?.price * (quantity - 1));
    } else {
      alert("bạn cần đặt tối thiểu 1 mặt hàng");
    }
  };
  const handeTang = () => {
    setQuantity(quantity + 1);
    setPrice(product?.price * (quantity + 1));
  };
  const handleCart = async(productId, quantity) => {
    const res=await addToCart(userId,productId,quantity);
    if(res){
      setShow(false);
    }

  };
  const size = ["M", "L", "XL"];
  return (
    <div className={`order ${show && "active"}`}>
      <div
        onClick={() => {
          setShow(false);
        }}
        className="order__overlay"
      ></div>
      <div className="order__cart">
        <div
          onClick={() => {
            setShow(false);
          }}
          className="order__icon"
        >
          <FontAwesomeIcon className="order__close" icon={faClose} />
        </div>
        <div className="order__img">
          <img src={`data:image/jpeg;base64,${product.image}`} alt="" className="order__anh" />
        </div>
        <div className="order__information">
          <h2 className="order__store">{product?.store}</h2>
          <div className="order__mon">
            <span className="order__gt" style={{ fontSize: "2rem" }}>
              Tên Món:
            </span>
            <span className="order__name">{product?.name}</span>
          </div>
          <div className="order__size">
            <span className="order__luachon" style={{ fontSize: "2rem" }}>
              Size:{" "}
            </span>
            {size.map((item, index) => (
              <button
                id={index}
                key={index}
                onClick={() => handleColor(index)}
                className={`order__button ${color === index ? "active" : ""}`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="order__soluong">
            <span style={{ fontSize: "2rem" }}>Số Lương: </span>
            <button onClick={() => handeIncret()} className="order__mana">
              -
            </button>
            <button className="order__mana">{quantity}</button>
            <button onClick={() => handeTang()} className="order__mana">
              +
            </button>
          </div>
          <div className="order__price">
            <span className="order__price-text" style={{ fontSize: "2rem" }}>
              Giá Bán:{" "}
            </span>
            {price && (
              <span className="order__money">
                ${Math.floor(price * 100) / 100}
              </span>
            )}
          </div>
          <div className="order__mota">
            <span style={{ fontSize: "2rem" }}>Mô tả sản phẩm:</span>
            <span style={{ fontSize: "1.8rem", padding: "0 12px" }}>
              {product.description}
            </span>
          </div>
          <div className="order__add">
            <button className="order__cart1" onClick={() => handleCart(product._id, quantity)}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
