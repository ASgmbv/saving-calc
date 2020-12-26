import { Card, DatePicker, Input, Switch, Button } from "antd";
import "./Calculator.css";

const Calculator = (params) => {
  return (
    <div className="custom-card">
      <h2 className="card-heading">
        Saving <br /> Calculator
      </h2>

      <div class="switch-container">
        <Switch id="switch" />
        <label htmlFor="switch" className="switch-label">
          Calculate by total amount
        </label>
      </div>

      <div className="form-field-container">
        <label htmlFor="total-amount" className="form-field-label">
          Total amount
        </label>
        <Input id="total-amount" addonBefore="$" />
      </div>

      <div className="form-field-container">
        <label htmlFor="reach-goal-by" className="form-field-label">
          Reach goal by
        </label>
        <Input id="reach-goal-by" addonBefore="<" addonAfter=">" />
      </div>
    </div>
  );
};
// 16, 40, 75
export default Calculator;
