import { useState, useEffect } from "react";

const useFetch = (path) => {
  const baseurl = "http://127.0.0.1:8000/"; 

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseurl}${path}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message || "Something went wrong");
      }
    };

    fetchData();
  }, [path]); 

  return [data, error];
};

export default useFetch;
