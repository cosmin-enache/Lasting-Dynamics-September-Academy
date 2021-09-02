import "./styles.css";
import React from "react";

const LayoutBoard = React.memo(({ firstHeading, secondHeading }) => {
  return (
    <div>
      {firstHeading}
      {secondHeading}
    </div>
  );
});

const App = () => {
  return (
    <LayoutBoard
      firstHeading={<h1>Hello</h1>}
      secondHeading={<h1>World!</h1>}
    />
  );
};

export default App;
