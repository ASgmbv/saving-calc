import "./NumberInput.css";

// TODO only numbers
// handle errors

const NumberInput = (props) => {
  return (
    <div className="custom-number-input-container">
      <div className="custom-number-input-addon-before">$</div>
      <input
        type="number"
        // for mobile keyboards
        min="0"
        inputMode="numeric"
        pattern="[0-9]*"
        className="custom-number-input"
        {...props}
      />
    </div>
  );
};

export default NumberInput;
