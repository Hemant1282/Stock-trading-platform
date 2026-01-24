import LeftImage from "./LeftImage";
import "../../styles/ProductsPageCss/ProductsPage.css"
import Leftimage1 from "../../assets/ProductsPageAssets/products-kite.png"
import RightImage from "./RightImage";
import RightImage1 from "../../assets/ProductsPageAssets/products-console.png"
import LeftImage2 from "../../assets/ProductsPageAssets/products-coin.png";
import RightImage2 from "../../assets/ProductsPageAssets/landing.svg"
import RightImage3 from "../../assets/ProductsPageAssets/varsity-products.svg"
import Logos from "./Logos.jsx";

function ProductsPage() {
    return (
      <div className="products">
        <div className="products-top">
          <h1>Zerodha Products</h1>
          <p>Sleek, modern, and intuitive trading platforms</p>
          <p>Check out our investment offerings →</p>
        </div>

        <LeftImage
          image={Leftimage1}
          heading="Kite"
          para="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        ></LeftImage>

        <RightImage
          heading="Console"
          para="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
          link="Learn more"
          image={RightImage1}
        ></RightImage>

        <LeftImage
          image={LeftImage2}
          heading="Coin"
          para="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        ></LeftImage>

        <RightImage
          image={RightImage2}
          heading="Kite Connect API"
          para="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
          link="Kite Connect"
        ></RightImage>

        <LeftImage
          heading="Varsity mobile"
          para="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
          image={RightImage3}
        ></LeftImage>

        <Logos></Logos>

        <div className="logo-below">
          <button className="products-page-btn">Signup for free</button>
        </div>
      </div>
    );
}

export default ProductsPage;