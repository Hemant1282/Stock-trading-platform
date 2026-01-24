import "../../styles/ProductsPageCss/Logos.css"
import logo1 from "../../assets/ProductsPageAssets/logos/logo1.png"
import logo2 from "../../assets/ProductsPageAssets/logos/logo2.svg"
import logo3 from "../../assets/ProductsPageAssets/logos/logo3.svg"
import logo4 from "../../assets/ProductsPageAssets/logos/logo4.png"
import logo5 from "../../assets/ProductsPageAssets/logos/logo5.png"
import logo6 from "../../assets/ProductsPageAssets/logos/logo6.png"



function Logos() {
    return (
      <>
        <div className="logos">
          <h2>
            Want to know more about our technology stack? Check out the
            Zerodha.tech blog.
          </h2>
          <h1>The Zerodha Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>

          <div className="logos-list">
            <div className="logo1">
              <img src={logo1} alt="logo1" />
              <p>
                Our asset management venture<br></br>that is creating simple and
                transparent index<br></br>funds to help you save for your goals.
              </p>
            </div>
            <div className="logo2">
              <img src={logo2} alt="logo2" />
              <p>
                Options trading platform that lets you<br></br>create strategies,
                analyze positions, and examine<br></br>data points like open interest,
                FII/DII, and more.
              </p>
            </div>
            <div className="logo3">
              <img src={logo3} alt="logo3" />
              <p>
                Investment research platform<br></br>that offers detailed insights on
                stocks,<br></br> sectors, supply chains, and more.
              </p>
            </div>
            <div className="logo4">
              <img src={logo4} alt="logo4" />
              <p>
                Systematic trading platform<br></br>that allows you to create and
                backtest<br></br>strategies without coding.
              </p>
            </div>
            <div className="logo5">
              <img src={logo5} alt="logo5" />
              <p>
                Thematic investing platform<br></br>that helps you invest in diversified<br></br>
                baskets of stocks on ETFs.
              </p>
            </div>
            <div className="logo6">
              <img src={logo6} alt="logo6" />
              <p>
                Personalized advice on life<br></br>and health insurance. No spam<br></br>and no
                mis-selling. Sign up for free
              </p>
            </div>
          </div>
        </div>
      </>
    );
}

export default Logos;