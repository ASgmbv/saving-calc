import "./DateInput.css";

const DateInput = (params) => {
  return (
    <div className="custom-date-input-container">
      <button className="custom-date-input-button custom-date-input-button-left">
        &lt;
      </button>
      <input type="date" className="custom-date-input" />
      <button className="custom-date-input-button custom-date-input-button-right">
        &gt;
      </button>
    </div>
  );
};

export default DateInput;
