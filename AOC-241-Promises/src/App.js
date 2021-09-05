import "./styles.css";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState(null);

  const fetchData = () => {
    fetch("https://random-data-api.com/api/users/random_user")
    .then(
      response => response.json(),
      error => console.error(error)
    )
    .then(
      data => {setData(data); console.log(data)},
      error => console.error(error)
    )
  };

  useEffect(() => {
    fetchData();
  }, []); // run only on mount / unmount

  return (
    <>
      {
        data ? (
          <h1>Data loaded!</h1>
        ) : (
          <h1>Loading...</h1>
        )
      }
    </>
  );
};

export default App;