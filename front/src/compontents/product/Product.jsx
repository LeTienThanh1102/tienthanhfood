import { faStar } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./product.scss";
import ProductItem from "./product-item";
import { Link } from "react-router-dom";
import { getProductbyCategory } from "../../service/apiService";
import { useEffect, useState } from "react";

function Product() {
  const [product, setProduct]=useState([]);
  useEffect(()=>{
    fetchFlashSale();
  },[])
  const fetchFlashSale=async()=>{
    const id='6690def3e205f6c126a1eab1';
    const res= await getProductbyCategory(id);
    if(res){
      setProduct(res);
    }
  }
  return (
    <div className="product">
      <div className="product__container">
        <div className="product__header">
          <h3 className="product__heading">Hôm nay ăn gì??</h3>
          <p className="product__best active">Best sellers</p>
          <Link to="/sale" className="product__best">
            Khuyến mãi mỗi ngày
          </Link>
        </div>
        <div className="product__body">
          <div className="product__row">
            {product.map((item, index) => (
              <div key={index} className="product__col-4">
                <div className="product_items">
                  <ProductItem
                    item={item}
                    img={item.image}
                    name={item.name}
                    price={item.price}
                    buy={item.buyed}
                    place={item.address}
                    store={item.store}
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

export default Product;
