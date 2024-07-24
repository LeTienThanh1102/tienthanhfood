import { useEffect, useState } from "react";
import Footer from "../../compontents/footer/Footer";
import Header from "../../compontents/header/Header";
import "./New.scss";
import Form from "react-bootstrap/Form";
import { getAllCategory, postProduct } from "../../service/apiService";
import "../../compontents/product/product-item.scss";
import { ToastContainer, toast } from 'react-toastify';

function New() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [buyed, setBuyed] = useState(0);
  const [review, setReview] = useState("");
  const [list, setList]=useState([]);
  const handleUpload = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setReview(URL.createObjectURL(e.target.files[0]));
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result.replace("data:", "").replace(/^.+,/, ""));
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmitProduct = async () => {
    const newProduct = {name,description,price,category,image,address,buyed};
    const res = await postProduct(newProduct);
    if(res && res.data){
        toast.success("Add Product Success !!!!");
        setName(''); setAddress(''); setBuyed('');
        setCategory(''); setDescription(''); setImage(''); setPrice('');
    }
    else{
      toast.error("Fail Add product ....");
    }
  };
  useEffect(()=>{
    fecthCategory();
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  },[])
  const fecthCategory=async()=>{
    const data=await getAllCategory();
    if(data){
        setList(data);
    }
  }
  return (
    <div className="new-container">
      <ToastContainer />
      <Header></Header>
      <div className="new-body" style={{ marginTop: "70px" }}>
        <div className="new-title">
          <h2>Thêm một sản phẩm mới:</h2>
        </div>
        <div className="new-content">
          <div className="new-form">
            <label className="new-lable">Tên sản phẩm:</label>
            <input
              type="text"
              className="new-input"
              placeholder="Nhập vào đây ......"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="new-form">
            <label className="new-lable">Mô tả về sản phẩm:</label>
            <input
              type="text"
              className="new-input"
              placeholder="Nhập vào đây ......"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="new-form">
            <label className="new-lable">Giá sản phẩm:</label>
            <input
              type="text"
              className="new-input"
              placeholder="Nhập vào đây ......"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="new-form">
            <label className="new-lable">Loại mặt hàng:</label>
            <Form.Select
              aria-label="Default select example"
              className="new-input"
              onChange={(e) => setCategory(e.target.value)}
            >
                <option >Open this select menu</option>
                {list.map((item, index)=>(
                    <>
                        <option key={index} value={item._id}>{item.name}</option>
                    </>
                ))}
            </Form.Select>
          </div>
          <div className="new-form">
            <label className="new-lable">Ảnh sản phẩm:</label>
            <input
              type="file"
              className="new-input"
              placeholder="Nhập vào đây ......"
              onChange={(e) => handleUpload(e)}
            />
            <div className=" col-md-12">
              {review ? <img className="img-review" src={review} /> : <span> </span>}
            </div>
          </div>
          <div className="new-form">
            <label className="new-lable">Địa chỉ sản xuất:</label>
            <input
              type="text"
              className="new-input"
              placeholder="Nhập vào đây ......"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="new-form">
            <label className="new-lable">Số sản phẩm đã bán ra:</label>
            <input
              type="text"
              className="new-input"
              placeholder="Nhập vào đây ......"
              onChange={(e) => setBuyed(e.target.value)}
            />
          </div>

          <div className="new-save">
            <button onClick={() => handleSubmitProduct()}>Save</button>
          </div>
        </div>
      </div>
      <div className="new-footer">
        <Footer />
      </div>
    </div>
  );
}

export default New;
