import { useEffect } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import ProVip from "./ProVip";
import "./sale.scss";
function Sale() {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  return (
    <div className="page">
      <Header />
      <div className="body__sale">
        <ProVip />
      </div>
      <Footer />
    </div>
  );
}

export default Sale;
