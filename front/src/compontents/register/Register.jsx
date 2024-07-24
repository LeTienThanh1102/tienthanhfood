import "./register.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../../service/apiService";
function Register() {
  const [username,setUserName]=useState('');
  const [email,setEmail]=useState('');
  const [address,setAddress]=useState('');
  const [password,setPassword]=useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleClick = async() => {
    const isValidateEmail=validateEmail(email);
    if(!isValidateEmail){
      alert("Error Format !!!!!");
      return;
    }
    const res=await registerUser(email,password,username,address);
    // console.log(res);
    if(res){
      navigate('/login')
    }
  };

  return (
    <div className="register">
      <div className="register__contaniner">
        <div className="register__header">
          <p className="register__heading">Đăng kí tài khoản</p>
        </div>
        <div className="register__body">
          <div className="inforfrom">
            <label> Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email....."
            />
            <label> Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your name.........."
            />
            <label> Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="..............."
            />
            <label> Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder=".............."
            />
            <div className="register__submit">
              <button className="submit" onClick={()=>handleClick()}>
                {" "}
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
