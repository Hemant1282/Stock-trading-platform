import box1image from "../../assets/SignupPageAssets/box1image.svg"
import box2image from "../../assets/SignupPageAssets/box2image.svg"
import box3image from "../../assets/SignupPageAssets/box3image.svg"
import box4image from "../../assets/SignupPageAssets/box4image.svg"
import box5image from "../../assets/SignupPageAssets/box5image.svg"

import "../../styles/SignupPageCss/SignupPage_Rank4.css"


function SignupPage_Rank4() {
    return (
      <>
        <div className="box-container">
          <h1>Explore different account types</h1>
          <div className="box-list">
            <div className="box1">
                <img src={box1image} alt="image" />
                <h2>Indivisual Account</h2>
                <p>Invest in equity,mutual funds and<br></br>derivatives</p>
            </div>
            <div className="box2">
                <img src={box2image} alt="image" />
                <h2>HUF Account</h2>
                <p>Make tax-efficient investements for your family</p>
            </div>
            <div className="box3">
                <img src={box3image} alt="image" />
                <h2>NRI Account</h2>
                <p>Invest in equity . mutual funds , debentures and more</p>
            </div>
            <div className="box4">
                <img src={box4image} alt="image" />
                <h2>Minor Account</h2>
                <p>Teach your little ones about money and invest for their future with them</p>
            </div>
            <div className="box5">
                <img src={box5image} alt="image" />
                <h2>Corporate/LLP/Partnership</h2>
                <p>Manage your business surplus and investements easily</p>
            </div>
          </div>
        </div>
      </>
    );
}

export default SignupPage_Rank4;