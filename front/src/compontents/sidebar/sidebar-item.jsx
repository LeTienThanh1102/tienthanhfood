import './sidebar-item.scss';


function SidebarItem(props) {
    return  (
        <div className='sidebarItem'>
            <div className="sider__contact">
                <div className="slider__img">
                    <img src={props.img} alt="" />
                </div>
                <div className="slider__comment">
                    <p className="slider__logen">{props.title}</p>
                    <h3 className="slider__name">{props.name}</h3>
                    <span className="slider_recommet">{props.comment}</span>
                </div>
            </div>
            
        </div>
        )
}

export default SidebarItem;