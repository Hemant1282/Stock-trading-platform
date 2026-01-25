import { useState } from "react";
import "../../styles/PricingPageCss/PricingPageTable.css"
import EquityTable from "./EquityTable.jsx"
import CurrencyTable from "./CurrencyTable.jsx"
import CommodityTable from "./CommodityTable.jsx";


function PricingTable() {
    const [isSelected,setIsSelected] = useState(null);
    return (
      <>
        <div className="table-btn">
          <button
            className="equity"
            onClick={() => {
              setIsSelected("equity");
            }}
          >
            Equity
          </button>
          <button
            className="currency"
            onClick={() => {
              setIsSelected("currency");
            }}
          >
            Currency
          </button>
          <button
            className="commodity"
            onClick={() => {
              setIsSelected("commodity");
            }}
          >
            Commodity
          </button>
        </div>
        <div className="table-container">
          <div className="table-space">
            {isSelected === "equity" && <EquityTable />}
            {isSelected === "currency" && <CurrencyTable />}
            {isSelected === "commodity" && <CommodityTable />}
          </div>
        </div>
      </>
    );
}

export default PricingTable;