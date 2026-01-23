import accountopen from "../../assets/SignupPageAssets/account_open.svg"
import "../../styles/SignupPageCss/SignupPage_Rank1.css"
import indiaflag from "../../assets/SignupPageAssets/india-flag.svg"

function SignupPage_Rank1() {
    return (
      <div className="signup-rank1-container">
        <h1>Open a free demat and trading account online</h1>
        <p>
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>

        <div className="signup-rank1-container-bottom">
          <img src={accountopen} alt="accountopen" />
          <div className="signup-rank1-container-bottom-right">
            <h2>Singup now</h2>
            <p>Or track your existing application</p>
            <div class="phone-input">
              <div class="country">
                <img src={indiaflag} alt="India" />
                <span>+91</span>
              </div>

              <input type="tel" placeholder="Enter your mobile number" />
            </div>
            <button>Get OTP</button>
            <p>
              By proceeding, you agree to the Zerodha terms & privacy policy
            </p>
            <p>Looking to open NRI account? Click here</p>
          </div>
        </div>
      </div>
    );
}

export default SignupPage_Rank1;