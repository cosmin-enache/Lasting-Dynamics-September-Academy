import "./styles.css";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://random-data-api.com/api/users/random_user");
      const jsonData = await response.json();

      setData(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error(error);
    }
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