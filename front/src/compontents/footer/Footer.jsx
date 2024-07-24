import "./footer.scss";

function Footer() {
    const local=['KFC','Pizza Hut','McDonald','StarBucks','Burger King']
    const place=['Hoàng Gia Place Center','Lotte Maria','Gragon Grenn Market','Hà Nội, Việt Nam - 100000','Korean']
    const company=['About us','Give Us Feedbacks','Regulation','Support','Jobs']
    const join=['Facebook','Instagram','ShopeeFood.vn - Giao đồ ăn tận nơi','NowPOS - Phần mềm quản lý','Youtube']
    return (
        <div className="footer">
            <div className="footer-pro">
                <div className="footer-content">
                    <h3 className="footer-heading">Local Brand</h3>
                    <ul className="footer__list">
                        {
                            local.map((item,index)=>(
                                <li className="footer_item" key={index}>{item}</li>
                            ))
                        }
                    </ul>

                </div>
                <div className="footer-content">
                    <h3 className="footer-heading">Company Address</h3>
                    <ul className="footer__list">
                        {
                            place.map((item,index)=>(
                                <li className="footer_item" key={index}>{item}</li>
                            ))
                        }
                    </ul>

                </div>
                <div className="footer-content">
                    <h3 className="footer-heading">Company</h3>
                    <ul className="footer__list">
                        {
                            company.map((item,index)=>(
                                <li className="footer_item" key={index}>
                                    <a href="" className="footer_a">{item}</a></li>
                            ))
                        }
                    </ul>

                </div>
                <div className="footer-content">
                    <h3 className="footer-heading">Join us on</h3>
                    <ul className="footer__list">
                        {
                            join.map((item,index)=>(
                                <li className="footer_item" key={index}>
                                    <a href="" className="footer_a_b">{item}</a></li>
                            ))
                        }
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Footer;