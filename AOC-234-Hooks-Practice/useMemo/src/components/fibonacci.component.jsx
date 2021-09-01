import { useMemo, useState } from "react";

const calculateFibonacci = number => {
  console.log("Calculating!");

  if (number === 0) return 0;
  if (number <= 2) return 1;

  return calculateFibonacci(number - 1) + calculateFibonacci(number - 2);
};

const Fibonacci = () => {
  const [number, setNumber] = useState(0);
  const [index, setIndex] = useState(0);

  const handleChange = event => {
    setNumber(parseInt(event.target.value) || 0)
  };

  const fibResult = useMemo(() => calculateFibonacci(number), [number]);

  return (
    <>
      <label style={{fontSize: "12px"}}>
        values from 1-30 recommended (otherwise it takes too long)
      </label>
      <br />
      <input type="number" onChange={handleChange} />
      <button onClick={() => setIndex(index + 1)}>Check Memo</button>
      <p>Current fibonacci number: <b>{fibResult}</b></p>
    </>
  );
};

export default Fibonacci;