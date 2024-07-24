import {
  faCartShopping,
  faClose,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./header.scss";
import { IoHomeOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { CartContext } from "../Context/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { getProductCart } from "../../service/apiService";
function Header() {
  const isAuthen = useSelector((state) => state.user.isAuthenticated);
  const user = useSelector((state) => state.user.account);
  const edit=useRef();
  const dispatch=useDispatch();
  const [cart, setCart]=useState([]);
  const { addCart } = useContext(CartContext);
  const search = useRef(null);
  const navigate = useNavigate();
  const [show, setShow]=useState(false);
  const menu = [
    { name: "Đồ ăn", path: "/infor" },
    { name: "Thực phẩm", path: "/thucpham" },
    { name: "Hoa quả", path: "/fruit" },
    { name: "Khuyến mãi", path: "/flash" },
    { name: "Thêm sản phẩm mới", path: "/new" },
  ];
  const handleSearch = () => {
    search.current.classList.toggle("active");
  };
  const handleClick=()=>{
   setShow(!show);
  }
  const handleCloseMenu=()=>{
    setShow(false);
  }
  const handleCloseMenu1=()=>{
    setShow(false);
    navigate('/profile')
  }
  const handleLogout=()=>{
    dispatch(logout());
    navigate('/');
  }
  useEffect(()=>{
    getProductToCart();
  },[])
  const getProductToCart=async()=>{
    if(isAuthen===true){
      const res= await getProductCart(user.id);
      if(res){
        setCart(res.items);
      }
    }
  }

  const handleOrderProduct =()=>{
    navigate('/purchase');
  }
  return (
    <div className="header">
      <div className="header__container">
        <Link to="/" className="header__img">
          <img
            src="https://seeklogo.com/images/F/food-logo-59E5A73AFD-seeklogo.com.png"
            alt=""
            className="header_logo"
          />
        </Link>
        <ul className="header-list">
          {menu.map((item, i) => (
            <li key={i} className="header-items">
              <Link to={item.path} className="header-name">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="header-use">
          <div ref={search} className="header__search-contact">
            <div className="header__search-bro">
              <div className="header__close" onClick={handleSearch}>
                <FontAwesomeIcon icon={faClose} />
              </div>
              <div className="header__search-name">
                <input
                  className="header__search-content"
                  placeholder="Search here"
                />
                <FontAwesomeIcon
                  className="header__search-icon"
                  icon={faSearch}
                />
              </div>
            </div>
          </div>
          <div className="header__use_search" onClick={handleSearch}>
            <FontAwesomeIcon className="header_use-icon" icon={faSearch} />
          </div>
          <Link to="/cart" className="header__cartItem">
            <FontAwesomeIcon icon={faCartShopping} />
            {cart?.length > 0 && (
              <div className="header__cart">{cart?.length}</div>
            )}
          </Link>
          <div className="header-login">
            {isAuthen ? (
              <>
                <div className="user-account" onClick={()=>handleClick()}>{user.username}</div>
                <div className={`header__account__edit ${show ? 'active' :''}`}>
                  <div className="header__account__body">
                    <ul>
                      <li onClick={handleCloseMenu1} >
                        <IoHomeOutline className="heeader-acc-icon" />
                        <span className="header-acc-link" >
                          Thông tin cá nhân cá nhân
                        </span>
                      </li>
                      <li onClick={handleCloseMenu}>
                        <IoSettingsOutline className="heeader-acc-icon" />
                        <span className="header-acc-link" onClick={handleOrderProduct}>
                          Đơn hàng
                        </span>
                      </li>
                      <li onClick={handleCloseMenu}>
                        <MdOutlineLogout className="heeader-acc-icon" />
                        <span
                          className="header-acc-link"
                          onClick={handleLogout}
                        >
                          LOGOUT
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <Link to="/login">
                <button className="btn">Login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
