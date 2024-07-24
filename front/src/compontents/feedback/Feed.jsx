import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./feedback.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay, Pagination } from "swiper";
import FeedItems from "./FeedItems";
function Feed() {
  const comment = [
    {
      img: "http://data.voh.com.vn/voh/Image/2018/12/20/434225737455109191357645636277370563330048n_20181220150837.jpg",
      name: "Maria Osaka",
      star: faStar,
      text: "Tôi đã có một trải nghiệm thực sự tuyệt vời tại đây! Thực đơn món chay rất hấp dẫn và thú vị. Đây là bữa tối ngon nhất mà tôi đã có trong thời gian ở Việt Nam và đây cũng là đêm cuối cùng của tôi ở đây 😊. Nhân viên vô cùng thân thiện. Không gian trong nhà được bài trí rất đẹp. Chắc chắn sẽ giới thiệu nơi này đến mọi người!",
    },
    {
      img: "https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/3/12/5069759384762a76150d6o-16155638926491856837254.jpg",
      name: "July Osimaka",
      star: faStar,
      text: "Tôi có thể thay đổi thói quen ăn mặn của mình, nếu tôi được dùng bữa tại đây mỗi ngày. Người ta thường nói rằng: chúng ta bắt đầu ăn bằng mắt, rất đúng. Món dùng tại đây trình bày vô cùng khéo léo. Tiếp theo là cảm nhận hương vị của món ăn trong miệng: Tất cả các món mà chúng tôi dùng đều vô cùng hoàn hảo. Bạn có thể thưởng thức vị tươi ngon của món salad, các món ăn từ nấm - đều rất tuyệt vời. Cực kỳ khuyến khích mọi người đến dùng bữa tại đây! .",
    },
    {
      img: "https://kenh14cdn.com/203336854389633024/2022/3/8/photo-1-16467175431221225437237.jpg",
      name: "Hồ Hải Nam",
      star: faStar,
      text: "Hum Vegetarian là một nhà hàng thực vật ở TP. Hồ Chí Minh. Các món ăn rất tuyệt, không thể tin là mình đang ăn chay!! Dịch vụ và bầu không khí thật tuyệt vời. Nếu bạn đang mong đợi một món dùng có hương vị đặc biệt - hãy thử lẩu atiso!",
    },
    {
      img: "https://play-lh.googleusercontent.com/8tryLXyTtB0svdJ95goZxGSxtRnZfq8T62lK2wm04L-3A2R59S0mFWYReZ3Huc2xKXrb",
      name: "Lê Ngọc Minh",
      star: faStar,
      text: "Chúng tôi đến đây theo lời giới thiệu và đã dùng ở đây cho cả 3 bữa tối khi ở TP.HCM. Chất lượng dịch vụ tuyệt vời, thực đơn có rất nhiều sự lựa chọn cho cả món chay và món thuần chay. Chất lượng món ăn và cách chế biến vô cùng sáng tạo. Thức uống sinh tố và nước ép thật tuyệt vời. Rất đáng giá.",
    },
  ];
  return (
    <div className="feed">
      <div className="feed__header">
        <p className="feed__header-content">Đánh giá phản hồi của khách hàng</p>
        <div className="feed__text">FeedBack and Comment</div>
      </div>
      <div className="feed__body">
        <div className="feed__container">
          <Swiper
            // modules={[]}
            // autoplay={{delay:1000}}
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={30}
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              780: {
                slidesPerView: 3,
              },
            }}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {comment.map((item, index) => (
              <SwiperSlide key={index}>
                <FeedItems
                  img={item.img}
                  name={item.name}
                  star={item.star}
                  text={item.text}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Feed;
