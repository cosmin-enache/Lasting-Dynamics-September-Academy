import "./styles.css";
import Button from "./Button.jsx";

const App = () => {
  return (
    <Button 
    value="Click me!" 
    handleClick={() => alert("Button Clicked!")} 
    />
  );
};

export default App;