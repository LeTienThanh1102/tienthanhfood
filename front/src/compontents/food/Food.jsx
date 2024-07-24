import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import "./food.scss";
import {
  faAnglesRight,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import FoodItem from "./FoodItem";
import { getProductbyCategory } from "../../service/apiService";
import { useEffect, useState } from "react";
function Food() {
  const[food, setFood]=useState([]);
  useEffect(()=>{
    fetchProductbyCategory();
  },[])
  const fetchProductbyCategory=async()=>{
    const id='6690df6fe205f6c126a1eab2';
    const res=await getProductbyCategory(id);
    if(res){
      setFood(res);
    }
  }
 
  return (
    <div className="food">
      <div className="food__container">
        <div className="food__header">
          <h2 className="food__heading">
            Các món ẩm thực truyền thống của các nước trên Thế Giới
          </h2>
          <div className="food__mater">
            <Link to="/infor" className="food__them">
              Xem thêm
            </Link>
            <FontAwesomeIcon className="right" icon={faAnglesRight} />
          </div>
        </div>
        <div className="food__body">
          <div className="food__col">
            {food?.map((item, index) => (
              <div key={index} className="food__pro">
                <div className="food__wrap">
                  <FoodItem
                    item={item}
                    img={item.image}
                    name={item.name}
                    title={item.description}
                    price={item.price}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Food;
