import "./styles.css";

const App = () => {
  const pets = ["cats", "dogs", "turtles"];

  return (
    <>
      <h2>{"Children type: string"}</h2>
      <h2>Children type: array</h2>
      {
        pets.map(pet => <h3>{pet}</h3>)
      }
    </>
  );
};

export default App;