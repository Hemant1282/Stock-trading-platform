import SignupPage_Rank1 from "./SignupPage_Rank1";
import SingupPage_Rank2 from "./SignupPage_Rank2";
import SignupPage_Rank3 from "./SignupPage_Rank3";
import SignupPage_Rank4 from "./SignupPage_Rank4";
import SignupPage_Rank5 from "./SignupPage_Rank5";
import Head_para_btn from "../HomePage/Head_para_btn";


function SignupPage() {
    return (
      <>
        <SignupPage_Rank1></SignupPage_Rank1>
        <SingupPage_Rank2></SingupPage_Rank2>
        <SignupPage_Rank3></SignupPage_Rank3>
        <SignupPage_Rank4></SignupPage_Rank4>
        <SignupPage_Rank5></SignupPage_Rank5>
        <Head_para_btn
          Heading="Open a Zerodha account"
          paragraph="Simple and intuitive apps · ₹0 for investments · ₹20 for intraday and F&O trades."
          btn = "Signup for free    "
        ></Head_para_btn>
      </>
    );
}

export default SignupPage;