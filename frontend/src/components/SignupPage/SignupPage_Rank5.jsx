import { use, useState } from "react";
import "../../styles/SignupPageCss/SignupPage_Rank5.css";




function SignupPage_Rank5() {

    let faqs = [
      {
        q: "What is a Zerodha account",
        para: [
          "A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally.",
        ],
      },
      {
        q: "What documents are required to open a demat account?",
        para: [
          "The following documents are required to open a Zerodha account online:",
          "PAN number",
          "Aadhaar Card (Linked with a phone number for OTP verification)",
          "Cancelled cheque or bank account statement (To link your bank account)",
          "Income proof (Required only if you wish to trade in Futures & options)",
        ],
      },
      {
        q: "Is Zerodha account opening free?",
        para: ["Yes, It is completely free."],
      },
      {
        q: "Are there any maintenance charges for a demat account?",
        para: [
          "The account maintenance charges is applicable based on the account type.",
          "For Basic Services Demat Account: Zero charges if the holding value is less than ₹4,00,000.",
          "For non-Basic Services Demat Account demat accounts: ₹300 per year + GST.",
          "To learn more about BSDA, Click here.",
        ],
      },
      {
        q: "Can I open a demat account without a bank account?",
        para: [
          "To open a demat account, you must have a bank account in your name.",
          "If UPI verification is completed successfully, no proof of bank is needed. However, if bank verification fails, you'll need to provide either a",
          "cancelled cheque or a bank statement to link your bank account to Zerodha.",
        ],
      },
      {
        q: "What is a Basic Services Demat Account (BSDA)?",
        para: [
          "BSDA is a demat account designed for retail investors with smaller holdings. It automatically applies if you have only one demat account per PAN",
          "and holdings of up to ₹10 lakhs in it. You will not be charged any Account Maintenance Charge (AMC) for holdings up to ₹4 lakhs value, and only",
          "₹25/quarter if holdings are between ₹4 lakhs and ₹10 lakhs.",
        ],
      },
      {
        q: "Can I open a demat and trading account using the mobile app?",
        para: [
          "Yes. You can open a demat and trading account completely online using the Zerodha Kite mobile app, available on Android and iOS.",
        ],
      },
    ];

    const [openIndex,setOpenIndex] = useState(null);
    return (
      <>
        <div className="FAQS">
          <h1>FAQS</h1>
          {faqs.map((item, index) => (
            <div className="faq-item" key={index}>
              <div
                className="faq-question"
                onClick={() => {
                  setOpenIndex(openIndex === index ? null : index);
                }}
              >
                <h2>{item.q}</h2>
                <span
                  className={`arrow ${openIndex === index ? "up" : "down"}`}
                >
                  <i class="fa-solid fa-arrow-down"></i>
                </span>
              </div>

              <div
                className={`faq-answer ${openIndex === index ? "open" : ""}`}
              >
                {
                    item.para.map((sentence) => {
                        return <p>{sentence}</p>;
                    })
                }
              </div>
            </div>
          ))}
        </div>
      </>
    );
}

export default SignupPage_Rank5;