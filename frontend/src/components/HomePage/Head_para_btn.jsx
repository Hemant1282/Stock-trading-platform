import "../../styles/HomePageCss/Head_para_btn.css"
import { Link } from "react-router-dom";

function Head_para_btn({Heading,paragraph,btn}) {
    return (
      <>
        <div className="heading-para-btn">
          <h1>{Heading}</h1>
          <p>{paragraph}</p>
          <Link to = "/register">
            <button>{btn}</button>
          </Link>
        </div>
      </>
    );
}

export default Head_para_btn;