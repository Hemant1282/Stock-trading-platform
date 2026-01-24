import "../../styles/ProductsPageCss/LeftImage.css"
import appstore from "../../assets/ProductsPageAssets/appstore-badge.svg"
import googleplay from "../../assets/ProductsPageAssets/google-play-badge.svg"

function LeftImage({image,heading,para}) {
    return (
      <>
        <div className="left-image">
          <img src={image} alt="image" />
          <div className="left-image-right">
            <h1>{heading}</h1>
            <p>{para}</p>

            <div className="left-image-right-links">
              <a href="">Try demo &rarr;</a>
              <a href="">learn more &rarr;</a>
            </div>
            <div className="left-image-right-button">
              <img src={appstore} alt="" />
              <img src={googleplay} alt="" />
            </div>
          </div>
        </div>
      </>
    );
}

export default LeftImage;