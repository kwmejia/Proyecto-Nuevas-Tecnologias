import { BannerComp } from "../components/banner/BannerComp";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { Outlet } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="fadeIn custom-scroll ">
      <Header />
      <BannerComp />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}


export default LandingPage;