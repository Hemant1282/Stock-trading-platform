import "../styles/HamburgerMenu.css"
import top1 from "../assets/HamburgerAssets/kite-logo.svg"
import top2 from "../assets/HamburgerAssets/console.svg"
import top3 from "../assets/HamburgerAssets/kite-connect.svg"
import top4 from "../assets/HamburgerAssets/varsity.png"
import top5 from "../assets/HamburgerAssets/tqna.png"


function HamburgerMenu() {
    return ( 
        <>
            <div className="ham-menu">
                <div className="ham-top">
                    <div className="ham-top1">
                        <img src={top1} alt="image" />
                        <h2>Kite</h2>
                        <p>Trading Platform</p>
                    </div>
                    <div className="ham-top2">
                        <img src={top2} alt="image" />
                        <h2>Console</h2>
                        <p>Backoffice</p>
                    </div>
                    <div className="ham-top3">
                        <img src={top3} alt="image" />
                        <h2>Kite Connect</h2>
                        <p>Backoffice</p>
                    </div>
                    <div className="ham-top4">
                        <img src={top4} alt="image" />
                        <h2>Coin</h2>
                        <p>Mutual funds</p>
                    </div>
                </div>
                <div className="ham-bottom">
                    <div>
                        <p>Utilities</p>
                        <ul>
                            <li>Calculators</li>
                            <li>Brokerage calculator</li>
                            <li>Margin calculator</li>
                            <li>SIP calculator</li>
                        </ul>
                    </div>
                    <div>
                        <p>Updates</p>
                        <ul>
                            <li>Z-connect blog</li>
                            <li>Circulars/Bulletin</li>
                            <li>IPOS</li>
                            <li>Markets</li>
                        </ul>
                    </div>
                    <div>
                        <p>Education</p>
                        <img src={top4} alt="image" />
                        <p>varsity</p>
                    </div>
                    <div>
                        <img src={top5} alt="image" />
                        <p>Trading Q&A</p>
                    </div>
                </div>
            </div>
        </>
     );
}

export default HamburgerMenu;