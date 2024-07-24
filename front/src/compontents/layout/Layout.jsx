
import Main from "../about/main";
import Feed from "../feedback/Feed";
import Food from "../food/Food";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Local from "../local/Local";
import Product from "../product/Product";
import SideBar from "../sidebar/SideBar";
import "./layout.scss";
import { useSelector } from "react-redux";
function Layout() {
  const user = useSelector((state) => state.user.account);
  return (
      <div>
        <Header />
        <div className="body">
          <SideBar />
          <Local />
          <Product  />
          <Main />
          <Food />
          <Feed />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
   
  );
}

export default Layout;
