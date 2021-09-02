import "./styles.css";

const MainColor = "#800080";
const SecondaryColor = "#e3ccba";

const PrimaryColouredH1 = ({ children }) => (<H1 primary>{children}</H1>);
const SecondaryColouredH1 = ({ children }) => (<H1 secondary>{children}</H1>);

const H1 = ({ children, primary }) => {
  const color = primary ? MainColor : SecondaryColor;

  return <h1 style={{color: color}}>{children}</h1>;
};

const App = () => {
  return (
    <>
      <PrimaryColouredH1>Primary Heading!</PrimaryColouredH1>
      <SecondaryColouredH1>Secondary Heading!</SecondaryColouredH1>
    </>
  );
};

export default App;