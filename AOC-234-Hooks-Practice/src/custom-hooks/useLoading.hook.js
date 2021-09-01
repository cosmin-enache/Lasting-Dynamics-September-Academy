import { useState, useEffect } from "react";

const useLoading = () => {
  const loadDate = () => {
    let date = new Date();

    return [
      date.getDay(), 
      date.getMonth(), 
      date.getFullYear()
    ].join("/");
  };

  const MOCK_DATA = {
    title: "Big title",
    message: "This is a message!",
    date: loadDate()
  };

  const [loading, setLoading] = useState(true); // loading by default
  const [data, setData] = useState(null);

  useEffect(() => {
    // mock `fetch` on component mount
    console.log("fetched data!");
    setTimeout(() => {
      setData(MOCK_DATA);
      setLoading(false);
    }, 3000);
  }, []);

  return { data, loading };
};

export default useLoading;