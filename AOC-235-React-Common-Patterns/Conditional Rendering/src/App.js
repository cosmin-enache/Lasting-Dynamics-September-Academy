import "./styles.css";
import { useState } from "react";

const App = () => {
  const [swap, setSwap] = useState(true);

  return (
    <>
      { true && <h1>Hello!</h1> }
      { false || <h1>This is</h1> }
      { swap ? <h1>Conditional</h1> : <h1>Rendering</h1> }
      <input type="button" value="Swap" onClick={() => setSwap(!swap) }/>
    </>
  );
};

export default App;