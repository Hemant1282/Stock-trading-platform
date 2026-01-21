import "../../styles/HomePageCss/Head_para_btn.css"

function Head_para_btn({Heading,paragraph,btn}) {
    return (
      <>
        <div className="heading-para-btn">
          <h1>{Heading}</h1>
          <p>{paragraph}</p>
          <button>{btn}</button>
        </div>
      </>
    );
}

export default Head_para_btn;