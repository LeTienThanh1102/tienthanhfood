import { useState } from "react";
import "./Purchase.scss";
import { MdOutlineMonetizationOn } from "react-icons/md";
function PurchaseMain({list}) {
  return (
    <div>
      <div className="purchase-main-header">
        <ul className="purchase-main-list">
          <li className="purchase-main-item" style={{color:"#ec6810"}}>Tất cả</li>
          <li className="purchase-main-item">Chờ xử lí</li>
          <li className="purchase-main-item">Đang vận chuyển</li>
          <li className="purchase-main-item">Đã giao</li>
          <li className="purchase-main-item">Đã hủy</li>
          <li className="purchase-main-item">Trả hàng/ Hoàn tiền</li>
        </ul>
      </div>
      {list.map((list, i)=>(
        <div key={i} className="purchase-product">
          {list.items.map((item, index)=>(
            <div key={index} className="purchase-product-item">
              <div className="purchase-product-header">
                <div className="purchase-product-header-one">
                  <p>{item.product.description}</p>
                  <button>Chat </button>
                  <button>Xem Shop </button>
                </div>
                <div className="purchase-product-header-two">
                  <span>Trang thái giao hàng: Chờ xử lí</span>
                  <span style={{color:"#ec1010"}}>{list.status} </span>
                </div>
              </div>
              <div className="purchase-product-main">
                <div className="purchase-product-image">
                    <img src={`data:image/jpeg;base64,${item.product.image}`} alt="" className="purchase-product-anh"/>
                </div>
                <div className="purchase-product-title">
                    <h2 className="purchase-product-name"> {item.product.name}</h2>
                    <p className="purchase-product-category"> {item.product.description}</p>
                    <p className="purchase-product-quanity"> Số lượng : {item.quantity}</p>
                    <p className="purchase-product-price"> Giá: {item.product.price}$</p>
                    <button className="purchase-product-policy"> Hoàn trả hàng miễn phí 15 ngày</button>
                </div>
              </div>
                <div className="purchase-product-footer">
                    <MdOutlineMonetizationOn className="purchase-icon"></MdOutlineMonetizationOn>
                    <span>Thành tiền:</span>
                    <span style={{color:"#ee2106", fontSize:"20px"}}> {item.product.price * item.quantity} $</span>
                </div>
                <div className="purchase-product-end">
                    <button style={{backgroundColor:"#0663ee"}}>Đang xử lí</button>
                    <button>Trợ giúp</button>
                    <button style={{backgroundColor:"#f75003"}}>Liên hệ người bán</button>
                </div>
            </div>

          ))}
        </div>

      ))     
      }
    </div>
  );
}

export default PurchaseMain;
