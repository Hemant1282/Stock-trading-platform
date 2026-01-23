import "../../styles/SignupPageCss/SignupPage_Rank2.css"
import stocks from "../../assets/SignupPageAssets/stocks-acop.svg"
import funds from "../../assets/SignupPageAssets/mf-acop.svg"
import IPO from "../../assets/SignupPageAssets/ipo-acop.svg"
import futures from "../../assets/SignupPageAssets/fo-acop.svg"



function SingupPage_Rank2() {
    return (
      <>
        <div className="signup-rank2">
          <h1>Investment options with Zerodha demat account</h1>
          <div className="signup-rank2-list">
            <div className="signup-rank2-list-image1">
              <img src={stocks} alt="img" />
              <div className="image1-metadata">
                <h2>Stocks</h2>
                <p>
                  Invest in all exchange-listed<br></br>securities
                </p>
              </div>
            </div>
            <div className="signup-rank2-list-image2">
              <img src={funds} alt="img" />
              <div className="image2-metadata">
                <h2>Mutual funds</h2>
                <p>
                  Invest in commission-free direct<br></br>mutual funds
                </p>
              </div>
            </div>
            <div className="signup-rank2-list-image3">
              <img src={IPO} alt="img" />
              <div className="image3-metadata">
                <h2>IPO</h2>
                <p>
                  Apply to the latest IPOs instantly<br></br>via UPI
                </p>
              </div>
            </div>
            <div className="signup-rank2-list-image3">
              <img src={futures} alt="img" />
              <div className="image4-metadata">
                <h2>Futures & options</h2>
                <p>
                  Hedge and mitigate market risk<br></br>through simplified F&O
                  trading
                </p>
              </div>
            </div>
          </div>
          <div className="explore-btn">
            <button className="explore-investements">
              Explore Investments
            </button>
          </div>
        </div>
      </>
    );
}

export default SingupPage_Rank2;
