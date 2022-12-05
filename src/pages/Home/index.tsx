import{ useState } from "react";
import "./Home.css";
import IncrementButton from "../../components/Buttons/IncrementButton";
import CounterDisplayer from "../../components/CounterDisplayer/CounterDisplayer";

const Home = () => {
  const [counter, setCounter] = useState(0);

  const updateCounterValue = (value: number) => {
    setCounter(counter + value);
  };

  return (
    <div className="home-container">
      <header>
        <img src="wweeddoo.png" alt="Logo Wweeddoo"/>
      </header>
      <div className="home">
        <div className="counter">
          <CounterDisplayer value={counter} />
          <div className="increment-buttons">
            <IncrementButton
              value={-1}
              handleClick={updateCounterValue}
            ></IncrementButton>
            <IncrementButton
              value={1}
              handleClick={updateCounterValue}
            ></IncrementButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
