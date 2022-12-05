import "./CounterDisplayer.css";

const CounterDisplayer = ({ value }: { value: number }) => {
  return <div className="counter-wrapper">{value}</div>;
};

export default CounterDisplayer;
