import "./styles.css";

const CustomH1 = ({ children }) => (
  children(500)
);

const App = () => {
  return (
    <>
      <CustomH1>{ (value) => <h1>{value}</h1> }</CustomH1>
      { (() => <h1>Hello</h1>)() }
    </>
  )
};

export default App;