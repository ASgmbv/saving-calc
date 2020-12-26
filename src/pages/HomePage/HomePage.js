import { Button } from "antd";
import Calculator from "../../components/Calculator/Calculator";
import "./HomePage.css";

const HomePage = (params) => {
  return (
    <div className="container">
      <p
        style={{
          color: "rgb(54, 133, 245)",
        }}
      >
        Let's plan your saving goal
      </p>
      <Calculator />
    </div>
  );
};

export default HomePage;
