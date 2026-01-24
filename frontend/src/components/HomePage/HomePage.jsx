import LandingPage from "../../assets/HomePageAssets/landing.svg";
import Head_para_btn from "./Head_para_btn";
import HeroSection from "./HeroSection";
import "../../styles/HomePageCss/HomePage.css";

function HomePage() {
    return (
      <>
        <div className="landing-image-div">
          <img className="landing-image" src={LandingPage} alt="landingPage" />
        </div>
        <Head_para_btn
          Heading={"Invest in everything"}
          paragraph={
            "Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more."
          }
          btn={"Sign up for free"}
        ></Head_para_btn>
        <HeroSection></HeroSection>
        <Head_para_btn
          Heading={"Open a Zerodha account"}
          paragraph={
            "Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades."
          }
          btn={"Sign up for free"}
        ></Head_para_btn>
      </>
    );
}

export default HomePage;