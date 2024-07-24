import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FaStar } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./product-item.scss";
import Order from "../order/Order";
import { useState } from "react";
import { getProductbyId } from "../../service/apiService";

function ProductItem(props) {
  const [product, setProduct] = useState({});
  const [show, setShow] = useState(false);
  const handleOrder = async (id) => {
    const res = await getProductbyId(id);
    if (res) {
      setProduct(res);
      setShow(true);
    }
  };

  return (
    <>
      <div className="product-item">
        <div className="theme"></div>
        <div className="product__single">
          <div className="food__tym1">
            <FontAwesomeIcon className="food__icon-tym1" icon={faHeart} />
          </div>
          <img
            src={`data:image/jpeg;base64,${props.img}`}
            alt=""
            className="product__img"
          />
          <h3 className="product__name">{props.name}</h3>
          <div className="product_icon">
            <FaStar className="product_icon-a" />
            <FaStar className="product_icon-a" />
            <FaStar className="product_icon-a" />
            <FaStar className="product_icon-a" />
            <FaStar className="product_icon-a" />
          </div>
          <div className="product_body">
            <p className="product__price">${props.price}</p>
            <button
              onClick={() => handleOrder(props.item._id)}
              className="product__buy"
            >
              Buy Now
            </button>
          </div>
          <div className="product__footer">
            <div className="product__place">{props.place}</div>
            <div className="product__cart">Đã bán {props.buy}p</div>
          </div>
        </div>
      </div>
      <Order product={product} show={show} setShow={setShow} />
    </>
  );
}

export default ProductItem;
