import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaStar } from "react-icons/fa";
import { getProductbyId } from "../../service/apiService";
import { useState } from "react";
import Order from "../order/Order";
function FoodItem(prop) {
  const [product, setProduct]=useState({});
  const [show, setShow]=useState(false);
  const handleOpen = async(id) => {
    const res= await getProductbyId(id);
    if(res){
      setProduct(res);
      setShow(true);
    }
  };

  return (
    <div className="hello">
      <div className="food__content">
        <div className="food__tym">
          <FontAwesomeIcon className="food__icon-tym" icon={faHeart} />
        </div>
        <div className="food__eye">
          <FontAwesomeIcon className="food__icon-eye" icon={faEye} />
        </div>
        <div className="food__ang">
          <img src={`data:image/jpeg;base64,${prop.img}`} alt="" className="food__img" />
        </div>
        <div className="food__con">
          <p className="food__name">{prop.name}</p>
          <div className="food__font">
            <FaStar className="food__icon" />
            <FaStar className="food__icon" />
            <FaStar className="food__icon" />
            <FaStar className="food__icon" />
            <FaStar className="food__icon" />
            </div>
          <div className="food__title">{prop.title}</div>
          <div className="food__cart">
            <button onClick={() => handleOpen(prop.item._id)} className="food__button">
              Buy Food
            </button>
            <span className="food__price">${prop.price}</span>
          </div>
        </div>
      </div>
      <Order show={show} setShow={setShow} product={product} />
    </div>
  );
}

export default FoodItem;
