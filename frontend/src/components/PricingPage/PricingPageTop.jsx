import twocoin from "../../assets/HomePageAssets/other-trades.svg";
import zerocoin from "../../assets/HomePageAssets/pricing-eq.svg"
import "../../styles/PricingPageCss/PricingPageTop.css"

function PricingPageTop() {
    return (
      <>
        <div className="pricing-top">
          <h1>Charges</h1>
          <h2>List of all charges and taxes</h2>
        </div>

        <div className="pricingpagetop">
          <div className="pricingpagetop-image1">
            <img src={zerocoin} alt="coin" />
            <h2>Free equity delivery</h2>
            <p>
              All equity delivery investments (NSE, BSE), are<br></br>absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="pricingpagetop-image2">
            <img src={twocoin} alt="coin" />
            <h2>Intraday and F&O trades</h2>
            <p>
              Flat ₹ 20 or 0.03% (whichever is lower) per<br></br>executed order on
              intraday trades across<br></br>equity, currency, and commodity trades.
              Flat<br></br>₹20 on all option trades.
            </p>
          </div>
          <div className="pricingpagetop-image3">
            <img src={zerocoin} alt="coin" />
            <h2>Free direct MF</h2>
            <p>
              All direct mutual fund investments are<br></br>absolutely free — ₹ 0
              commissions & DP<br></br>charges.
            </p>
          </div>
        </div>
      </>
    );
}

export default PricingPageTop;
