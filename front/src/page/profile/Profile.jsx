import React, { useState, useEffect } from "react";
import "./Profile.scss";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../compontents/header/Header";
import { getUserbyId, updateAccountUser } from "../../service/apiService";
import { updateUser } from "../../compontents/redux/authSlice";
import { ToastContainer, toast } from 'react-toastify';


const Profile = () => {
  const dispatch = useDispatch();
  useEffect(()=>{})
  const account = useSelector((state) => state.user.account);
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  useEffect(()=>{
    getAccountUser();
  },[account])
  const getAccountUser=async()=>{
    const res=await getUserbyId(account?.id);
    setUsername(res.username);
    setEmail(res.email);
    setAddress(res.address);
  }
  const setting = [
    {
      id: "username",
      field: "Họ tên",
      value: username,
      type: "text",
    },
    {
      id: "address",
      field: "Địa chỉ",
      value: address,
      type: "text",
    },
    {
      id: "email",
      field: "Email",
      value: email,
      type: "email",
    },
  ];

  // EDIT
  const handleChange = (item) => {
    document
      .querySelector(`.setting__infor__item__button.${item.id}`)
      .classList.add("active");
    document.getElementById(item.id).disabled = false;
    document.getElementById(item.id).focus();
  };

  // CLOSE
  const handleClose = (item) => {
    document
      .querySelector(`.setting__infor__item__button.${item.id}`)
      .classList.remove("active");
    document.getElementById(item.id).disabled = true;
  };

  // SETTING INPUT
  const handleChangeInput = (e,item) => {
    console.log(`Input changed for ${item.id}: ${e.target.value}`);
    if(item.id==="username"){
      setUsername(e.target.value);
    }
    if(item.id==="email"){
      setEmail(e.target.value);
    }
    if(item.id==="address"){
      setAddress(e.target.value);
    }
  };

  const handleSave = async(item) => {
    const userUpdate= {
      username: username,
      address:address,
      email: email,
    }
    const data= await updateAccountUser(account.id,userUpdate);
    if(data){
      dispatch(updateUser(data));
      toast.success("Update User Success !!!!");
      handleClose(item);
    }
  };
  return (
    <>
      <Header />
      <ToastContainer></ToastContainer>
      <section className="setting">
        <div className="setting__container">
          <h1>Cài Đặt</h1>
          <div className="setting__infor">
            <h2>Thông tin cá nhân</h2>
            {setting.map((item, index) => (
              <div key={index} className="setting__infor__item">
                <div className="setting__infor__item__input">
                  <h3>{item.field}</h3>
                  <input
                    id={item.id}
                    type={item.type}
                    defaultValue={item.value}
                    placeholder="Thêm thông tin"
                    onChange={(e) => handleChangeInput(e,item)}
                    disabled={true}
                  />
                </div>
                <div className={`setting__infor__item__button ${item.id}`}>
                  <button onClick={() => handleChange(item)}>Chỉnh sửa</button>
                  <div className="setting__infor__item__save">
                    <button onClick={() => handleSave(item)}>Lưu</button>
                    <button onClick={() => handleClose(item)}>Hủy</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
