import { useEffect, useState } from "react";
import Footer from "../../compontents/footer/Footer";
import Header from "../../compontents/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { getTopSale } from "../../service/apiService";
import "./Flash.scss";
function Flash() {
  const [sale, setSale] = useState([]);
  useEffect(() => {
    fechFlash();
  }, []);
  const fechFlash = async () => {
    const res = await getTopSale();
    console.log(res);
    if (res) {
      setSale(res);
    }
  };
  return (
    <>
      <Header />
      <div className="body__sale">
        <div className="proVip">
          <div className="pro__container">
            <div className="pro__list">
              {sale.map((item, index) => (
                <div key={index} className="pro__items">
                  <div className="pro__small">
                    <img
                      className="pro__img"
                      src={`data:image/jpeg;base64,${item.image}`}
                      alt=""
                    />
                  </div>
                  <div className="pro__content">
                    <h2 className="pro__heading">{item.name}</h2>
                    <div className="pro__title">
                      <div className="pro__star">
                        <FontAwesomeIcon
                          style={{ padding: "8px 4px", color: "red" }}
                          icon={faStar}
                        />
                        <p className="pro__text">Price: {item.price}</p>
                      </div>
                      <div className="pro__star">
                        <FontAwesomeIcon
                          style={{ padding: "8px 4px", color: "red" }}
                          icon={faStar}
                        />
                        <p className="pro__text">Buyed: {item.buyed}</p>
                      </div>
                      <div className="pro__star">
                        <FontAwesomeIcon
                          style={{ padding: "8px 4px", color: "red" }}
                          icon={faStar}
                        />
                        <p className="pro__text">Giảm giá mạnh, mọi người nhanh tay đặt hàng nha</p>
                      </div>
                    </div>
                    <div className="pro__order">
                      <button className="pro__button">{item.address}</button>
                      <button className="pro__button">
                        {item.description}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Flash;
