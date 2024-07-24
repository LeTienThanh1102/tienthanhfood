import "./local.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faC } from "@fortawesome/free-solid-svg-icons";
function Local() {
  const brand = [
    {
      img: "https://thumbs.dreamstime.com/b/kfc-logo-vector-format-available-ai-illustrator-kfc-logo-125010855.jpg",
      text: "KFC",
      to: "https://kfcvietnam.com.vn/vi/bat-dau-dat-hang.html",
    },

    {
      img: "https://duavang.net/wp-content/uploads/2021/08/gioi-thieu-lotte.jpg",
      text: "Lotteria",
      to: "https://www.lotteria.vn/",
    },
    {
      img: "https://nypost.com/wp-content/uploads/sites/2/2022/09/wendys-fast-food-sign-01-feature.jpg?quality=75&strip=all",
      text: "Wendy’s",
      to: "https://www.wendys.com/",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Baskin-Robbins_logo.svg/1200px-Baskin-Robbins_logo.svg.png",
      text: "Baskin Robbins",
      to: "https://baskinrobbins.vn/vn/index/trang-chu/",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD4AP0y9jT8uBMPaOLwDYQPxEbruRFXFIVHw&usqp=CAU",
      text: "Popeyes",
      to: "https://popeyes.vn/",
    },
    {
      img: "https://gigamall.com.vn/data/2019/09/20/13434233_LOGO-PIZZA-HUT-500x500.jpg",
      text: "Pizza Hut",
      to: "",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/vi/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png",
      text: "StarBucks",
      to: "https://www.starbucks.vn/",
    },
    {
      img: "data:image/png;base64,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",
      text: "Jollibee",
      to: "https://jollibee.com.vn/",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/vi/thumb/c/c9/Highlands_Coffee_logo.svg/1200px-Highlands_Coffee_logo.svg.png",
      text: "Highlands Coffee",
      to: "https://www.highlandscoffee.com.vn/vn/san-pham.html",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaTB2NKE6RXMpgopScHmeIvZqtJkkQJC6bg&usqp=CAU",
      text: "Pozza",
      to: "https://www.foody.vn/ha-noi/tra-sua-pozaa-tea-dai-hoc-ha-noi",
    },
    {
      img: "https://cf.shopee.vn/file/9c90b9b13c5bb50ac85ccd981f1f0db6",
      text: "Bill Fruit",
      to: "",
    },
  ];

  return (
    <div className="local">
      <div className="local__max">
        <div className="local__header">
          <FontAwesomeIcon icon={faAnglesRight} className="local__icon" />
          <div className="local__mana">
            <div className="local__heading">Thương hiệu đồ ăn nổi tiếng </div>
            <span className="recomment">Hấp dẫn, bán chạy, hot hit</span>
          </div>
        </div>
        <div className="loacal__body">
          {brand.map((item, index) => (
            <div className="local__content" key={index}>
              <a href={item.to} target="_blank" className="local__contaniner">
                <p className="local__name">{item.text}</p>
                <img src={item.img} alt="" className="local__img" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Local;
