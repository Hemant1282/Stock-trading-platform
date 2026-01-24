import "../../styles/ProductsPageCss/RightImage.css"
function RightImage({image,heading,para,link}) {
    return (
      <>
        <div className="right-image">
          <div className="right-image-right">
            <h1>{heading}</h1>
            <p>{para}</p>
            <a href="">{link} &rarr;</a>
          </div>
          <img src={image} alt="image" />
        </div>
      </>
    );
}

export default RightImage;  