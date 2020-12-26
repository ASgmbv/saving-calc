import { Card, DatePicker, Input, Button } from "antd";
import "./Calculator.css";
import Switch from "../Switch";
import { useState } from "react";

const Calculator = (params) => {
  const [calculateByTotal, setCalculateByTotal] = useState(false);

  return (
    <div className="custom-card">
      <h2 className="card-heading">
        Savings <br /> Calculator
      </h2>

      <div class="switch-container">
        <Switch
          id="switch"
          checked={calculateByTotal}
          onChange={(e) => {
            setCalculateByTotal(e.target.checked);
          }}
        />
        <label htmlFor="switch" className="switch-label">
          Calculate by total amount
        </label>
      </div>

      <div className="form-field-container">
        <label htmlFor="total-amount" className="form-field-label">
          Total amount
        </label>
        {/* <Input id="total-amount" addonBefore="$" /> */}
        <input type="number" className="" />
      </div>

      <div className="form-field-container">
        <label htmlFor="reach-goal-by" className="form-field-label">
          Reach goal by
        </label>
        <Input id="reach-goal-by" addonBefore="<" addonAfter=">" />
      </div>

      <div className="results-card">
        <div className="results">
          <span className="amount-text">Monthly Amount</span>
          <span className="amount-value">$978</span>
        </div>
        <div className="details">
          You are planning 26 monthly deposits to reach your $25000 goal by
          April 2022
        </div>
      </div>

      <Button
        style={{
          width: "100%",
          marginTop: "20px",
        }}
        type="primary"
      >
        Finish
      </Button>
    </div>
  );
};
// 16, 40, 75
export default Calculator;
