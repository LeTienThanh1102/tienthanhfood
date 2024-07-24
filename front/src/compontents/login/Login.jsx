import "./login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { postLoginUser } from "../../service/apiService";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/authSlice";
function Login() {
  const dispatch=useDispatch();
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const login = [
    {
      title: "Facebook",
      icon: faFacebook,
    },
    {
      title: "Số điện thoại",
      icon: faMobileScreen,
    },
    {
      title: "Google",
      icon: faFacebook,
    },
  ];

  const navigate = useNavigate();
  const handleClickLogin = async() => {
      const res=await postLoginUser(email, password);
      if(res){
        navigate('/');
        dispatch(updateUser(res));
      }
  };
  return (
    <div className="login">
      <div className="login-img">
        <img
          src="https://seeklogo.com/images/F/food-logo-59E5A73AFD-seeklogo.com.png"
          alt=""
        />
      </div>
      <div className="login-table">
        <div className="login_contaniner">
          <div className="login-header">
            <p className="login_name active">Đăng nhập</p>
            <Link to="/register" className="login_name">
              Đăng kí
            </Link>
          </div>
           <div className="login__acc-content">
            <input
              type="text"
              className="login__acc-input"
              placeholder="Tên đăng nhập hoặc Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="login__acc-input"
              placeholder="Mật khẩu"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login_btn" onClick={()=>handleClickLogin()}>
              Đăng nhập
            </button>
          </div>
          <p className="login__acc">Hoặc đăng nhập bằng tài khoản của bạn</p>
          <div className="login-button">
            {login.map((item, index) => (
              <div key={index} className="login_content">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="login-content-icon"
                />
                <div className="login__title">
                  <a href="" className="login__title-name">
                    {item.title}
                  </a>
                </div>
              </div>
            ))}
          </div>
         
          <p className="login-help">
            Chúng tôi không sử dụng thông tin của bạn với bất kỳ mục đích nào.
            Bằng cách đăng nhập hoặc đăng ký, bạn đồng ý với
            <a href="" style={{ padding: "0 12px" }}>
              Chính sách quy định của Foody
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
