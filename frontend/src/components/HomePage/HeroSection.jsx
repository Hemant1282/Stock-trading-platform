import "../../styles/HomePageCss/HeroSection.css"
import ecosystem from "../../assets/ecosystem.png"
import presslogo from "../../assets/press-logos.png"
import zerocoin from "../../assets/pricing-eq.svg"
import twocoin from "../../assets/other-trades.svg"
import varsityimage from "../../assets/index-education.svg"

function HeroSection() {
    return (
      <>
        <div className="Homepage-hero-section">
          <div className="Homepage-hero-section-top">
            <div className="Homepage-hero-section-top-left">
              <h1>Trust with confidence</h1>
              <h2>Customer-first always</h2>
              <p>
                That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
                crores of equity investments, making us India’s largest broker;
                contributing to 15% of daily retail exchange volumes in India.
              </p>
              <h2>No spam or gimmicks</h2>
              <p>
                No gimmicks, spam, "gamification", or annoying push
                notifications. High quality apps that you use at your pace, the
                way you like. Our philosophies.
              </p>
              <h2>The Zerodha universe</h2>
              <p>
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </p>
              <h2>Do better with money</h2>
              <p>
                With initiatives like Nudge and Kill Switch, we don't just
                facilitate transactions, but actively help you do better with
                your money.
              </p>
            </div>
            <div className="Homepage-hero-section-top-right">
              <img className="ecosystem" src={ecosystem} alt="ecosystem" />
              <div>
                <a href="#">Explore our products &rarr;</a>
                <a href="#">Try Kite demo &rarr;</a>
              </div>
            </div>
          </div>
          <div className="press-logo-div">
            <img className="press-logo" src={presslogo} alt="press-logo" />
          </div>

          <div className="Homepage-hero-section-bottom">
            <div className="Homepage-hero-section-bottom-top">
              <div className="Homepage-hero-section-bottom-top-left">
                <h1>Unbeatable pricing</h1>
                <p>
                  We pioneered the concept of discount broking and price
                  transparency in India. Flat fees and no hidden charges.
                </p>
                <a href="#">See pricing &rarr;</a>
              </div>
              <div className="Homepage-hero-section-bottom-top-right">
                <img src={zerocoin} alt="zerocoin" />
                <p>Free account opening</p>
                <img src={zerocoin} alt="zerocoin" />
                <p>Free equity delivery and direct mutual funds</p>
                <img src={twocoin} alt="twocoin" />
                <p>Intraday and F&O</p>
              </div>
            </div>
            <div className="Homepage-hero-section-bottom-down">
              <img src={varsityimage} alt="" />
              <div>
                <h1>Free and open market education</h1>
                <p>
                  Varsity, the largest online stock market education book in the
                  world covering everything from the basics to advanced trading.
                </p>
                <a href="#">Varsity &rarr;</a>
                <p>
                  TradingQ&A, the most active trading and investment community
                  in India for all your market related queries.
                </p>
                <a href="#">TradingQ&A &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default HeroSection;