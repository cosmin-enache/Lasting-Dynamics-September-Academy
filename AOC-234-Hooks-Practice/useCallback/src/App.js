import { useState, useCallback } from "react";

const functionSet = new Set();

const App = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback(() => {
    setCounter(counter => counter + 1);
  }, []);

  functionSet.add(incrementCounter);

  console.log(functionSet);

  return (
    <>
      <h1>Count: {counter}</h1>
      <input type="button" value="Increment" onClick={incrementCounter} />
    </>
  );
};

export default App;