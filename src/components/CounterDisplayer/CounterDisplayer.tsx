import "./CounterDisplayer.css";

const CounterDisplayer = ({ value }: { value: number }) => {
  return <div className="counter-container">{value}</div>;
};

export default CounterDisplayer;
