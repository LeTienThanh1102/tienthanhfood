import './sidebar.scss';
import SidebarItem from './sidebar-item'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

function SideBar() {
    const data = [
        {
            img:"https://camnanganuong.com/wp-content/uploads/2021/05/10-quan-ga-khong-loi-thoat-tai-ha-noi-05.jpg",
            title:"Món ăn đặc biệt",
            name:"Pizza Domino",
            recomment:"Chương Trình tri ân Khách Hàng: MIX-MATCH - TIẾT KIỆM 45%, PIZZA CHỈ TỪ 89K"
        },
        {
            img:"https://xxe.vn/wp-content/uploads/2021/01/them-cac-mon-ga-hay-toi-ngay-3-dia-diem-ga-khong-loi-thoat-nay-tai-ha-noi-img_2976-scaled-1.jpg",
            title:"Siêu sale mỗi ngày",
            name:"Pizza Hut",
            recomment:"Chương Trình giảm giá sốc hàng Tuần vào các ngày cuối tuần"
        },
        {
            img:"https://cdn.shopify.com/s/files/1/0205/9582/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?crop=center&height=800&v=1644590192&width=800",
            title:"Siêu tiệc hàng tháng",
            name:"KFC",
            recomment:"Chương Trình tri ân khách Hàng: Giảm giá trên tất cả các cửa hàng KFC"
        },
        {
            img:"https://toplist.vn/images/800px/english-sunday-roast-92379.jpg",
            title:"Món ăn hot",
            name:"Trà Sữa",
            recomment:"Chương Trình tri ân khách Hàng: MIX-MATCH - TIẾT KIỆM 45%, PIZZA CHỈ TỪ 89K"
        }
    ]
    return  (
        <div className='sidebar'>
            <Swiper
            modules={[Autoplay ]}
            autoplay={{delay:2000}}
            pagination={{clickable: true}}
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
            onSwiper={(swiper) => console.log(swiper)}
            >
                {data.map((item,i) => (
                    <SwiperSlide key={i}>
                        <SidebarItem img={item.img} title={item.title} name={item.name} comment={item.recomment} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        )
}

export default SideBar;