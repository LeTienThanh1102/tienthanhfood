import Header from "../header/Header";
import './Purchase.scss';
import { FaRegUserCircle } from "react-icons/fa";
import { BsMinecartLoaded,BsBell, BsBadgeVr  } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import PurchaseMain from "./PurchaseMain";
import { getOrderbyUser } from "../../service/apiService";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
function Purchase() {
    const [list, setList]=useState([]);
    const user = useSelector((state) => state.user.account);
    const navigate=useNavigate();
    useEffect(()=>{
        fecthOrderbyUser()
    },[])
    const fecthOrderbyUser=async()=>{
        const res= await getOrderbyUser(user.id);
        if(res){
            setList(res);
        }
    }
    return ( 
        <div>
            <Header />
            <div className="purchase-body">
                <div className="purchase-side">
                    <div className="purchase-side-header">
                        <h2 className="purchase-title">{user.username}</h2>
                    </div>
                    <div className="purchase-side-body">
                        <div className="purchase-side-item" onClick={()=>navigate('/profile')}>
                            <FaRegUserCircle className="purchase-side-icon"/>
                            <span>Thông tin cá nhân</span>
                        </div>
                        <div className="purchase-side-item">
                            <BsMinecartLoaded className="purchase-side-icon"/>
                            <span style={{color:"#ec6810"}}>Đơn mua</span>
                        </div>
                        <div className="purchase-side-item">
                            <BsBell className="purchase-side-icon"/>
                            <span>Thông báo</span>
                        </div>
                        <div className="purchase-side-item">
                            <BsBadgeVr className="purchase-side-icon"/>
                            <span>Kho Voucher</span>
                        </div>
                    </div>
                </div>
                <div className="purchase-main">
                    <PurchaseMain list={list} />
                </div>
            </div>
        </div>
     );
}

export default Purchase;