import "../../styles/SignupPageCss/SignupPage_Rank3.css"
import account from "../../assets/SignupPageAssets/steps-acop.svg"

function SignupPage_Rank3() {
    return (
      <>
        <div className="signup-rank3">
          <h1>Steps to open a demat account with Zerodha</h1>
          <div className="signup-rank3-bottom">
            <img src={account} alt="account-opening" />
            <div className="account-steps">
              <div className="step1">
                <div>01</div>
                <p>Enter the requested details</p>
              </div>
              <div className="step2">
                <div>02</div>
                <p>Complete e-sign & verification</p>
              </div>
              <div className="step3">
                <div>03</div>
                <p>Start investing!</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default SignupPage_Rank3;
