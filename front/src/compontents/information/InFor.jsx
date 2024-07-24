import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useEffect, useState } from "react";
import { getProductAddMore } from "../../service/apiService";
import "./infor.scss";
import { FaAngleDown } from "react-icons/fa";
function InFor() {
  const [index, setIndex] = useState(6);
  const [sp, setSp] = useState([]);
  useEffect(() => {
    fetchProductMore(index);
  }, [index]);

  const handleAddMore = () => {
    setIndex((prevIndex) => prevIndex + 5);
  };

  const fetchProductMore = async (index) => {
    const res = await getProductAddMore(index);
    console.log(res);
    if (res) {
      setSp(res);
    }
  };
  return (
    <div>
      <Header />
      <div className="infor-saless">
        <h2 className="food__heading">
          Các món ẩm thực truyền thống của các nước trên Thế Giới
        </h2>
        {sp.map((item, y) => (
          <div key={y} className="infor">
            <div className="infor__containerr">
              <div className="infor__headerr">
                <img
                  src={`data:image/jpeg;base64,${item.image}`}
                  alt=""
                  className="inforr__img"
                />
              </div>
              <div className="inforr__body">
                <p className="inforr__name">{item.name}</p>
                <div className="inforr__price">
                  <span className="infor__text">Giá sản phẩm: </span>$
                  {item.price}
                </div>
                <div className="infor__title">
                  <span>Mô tả:</span>
                  <p className="infor__litle">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="add-button-more" onClick={() => handleAddMore()}>
          <button>Xem thêm</button>
          <span>
            <FaAngleDown className="add-more-icon" />
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default InFor;
