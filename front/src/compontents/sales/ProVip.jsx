import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./proVip.scss";
function ProVip() {
  const sale = [
    {
      img: "https://img.dominos.vn/70-Pizza-Thu-2-03.png",
      heading:
        "GIẢM 70% CHO PIZZA THỨ 2 - ÁP DỤNG MUA MANG VỀ & GIAO HÀNG TẬN NƠI",
      title: [
        "Mua Pizza size M hoặc L kèm nước uống nguyên giá được giảm 70% cho bánh Pizza thứ 2 cùng size có giá bằng hoặc thấp hơn Pizza thứ nhất.",
        "Áp dụng cho Mua Mang Về & Giao Hàng Tận Nơi tất cả các ngày trong tuần.",
      ],
      size: ["Đặt ngay size M", "Đặt ngay size L", "Đặt ngay size XL"],
    },
    {
      img: "https://img.dominos.vn/Chuong-trinh-M%26M-89K-03.png",
      heading: "MIX-MATCH - TIẾT KIỆM 45%, PIZZA CHỈ TỪ 89K",
      title: [
        "Giá: 89K/pizza dòng Favorite (size M). Thêm 30K/pizza và 60K/pizza để nâng lên dòng Premium và Signature.",
        "Giá: 159K/pizza dòng Favorite (size L). Thêm 20K/pizza và 60K/pizza để nâng lên dòng Premium và Signature.",
        "Áp dụng khi mua 02 pizza đồng thời.",
      ],
      size: [
        "02 Big Favarite(M)",
        "01 Favorite(M) + 01 Premium(M)",
        "01 Premium(M)",
        "01 Singapor(L) + 01 Paraty(M)",
        "01 Singapor(L) + 01 Premium(M)",
        "01 SingKu(L) + 01 SingMunu(M)",
        "01 Match(L) + 01 Socola(M)"
      ],
    },
    {
      img: "https://img.dominos.vn/Promotion+Deal+cho+nhom+VN_EN-1.png",
      heading: "DEAL SIÊU TO CHO NHÓM",
      title: [
        "Combo 229.000 đ cho 2 người gồm 1 pizza size M dòng Premium + 1 phần món phụ + 1 chai nước (390ml)",
        "Combo 309.000 đ cho 3-4 người gồm 1 pizza size L dòng Favorite + 2 phần món phụ + 2 chai nước (390ml)",
        "Combo 339.000 đ cho 3-4 người gồm 1 pizza size L dòng Premium + 2 phần món phụ + 1 chai nước (1.5L)",
      ],
      size: ["Combo 219k", "Combo 499k", "Combo 899k"],
    },
  ];
  return (
    <div className="proVip">
      <div className="pro__container">
        <div className="pro__list">
          {sale.map((item, index) => (
            <div key={index} className="pro__items">
              <div className="pro__small">
                <img className="pro__img" src={item.img} alt="" />
              </div>
              <div className="pro__content">
                <h2 className="pro__heading">{item.heading}</h2>
                <div className="pro__title">
                  {item.title.map((name, i) => (
                    <div key={i} className="pro__star">
                      <FontAwesomeIcon
                        style={{ padding: "8px 4px",color:"red" }}
                        icon={faStar}
                      />
                      <p className="pro__text">{name}</p>
                    </div>
                  ))}
                </div>
                <div className="pro__order">
                  {item.size.map((big, j) => (
                    <button key={j} className="pro__button">
                      {big}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProVip;
