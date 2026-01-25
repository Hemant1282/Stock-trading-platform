import { useState } from "react";
import "../../styles/SupportPageCss/SupportPageHero.css";

function SupportPageHero({ question, answer, rank }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="support-que" onClick={() => setIsSelected(!isSelected)}>
      <div className="que-container">
        <div className="que-container-top">
          <div className="que-container-top-left">
            <i className="fa-solid fa-right-to-bracket"></i>
            <h2>{question}</h2>
          </div>
          <i
            className={`fa-solid fa-arrow-down ${isSelected ? "rotate" : ""}`}
          ></i>
        </div>

        <div className={`support-answer ${isSelected ? "active" : ""}`}>
          <ul>
            {answer.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SupportPageHero;
