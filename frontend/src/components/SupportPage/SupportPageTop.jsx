import "../../styles/SupportPageCss/SupportPageTop.css"

function SupportPageTop() {
    return (
      <>
        <div className="support-page">
          <div className="support-page-head">
            <h1>Support Portal</h1>
            <button>My tickets</button>
          </div>
          <div className="support-page-input">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Eg: How do i open my account,How do i activate F&O..." />
          </div>
        </div>
      </>
    );
}

export default SupportPageTop;