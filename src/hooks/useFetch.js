import { useState, useEffect } from "react";

const useFetch = url => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch(url)
        .then(res => {
          if (!res.ok) throw Error(`${res.url}: ${res.statusText}`);
          return res.json();
        })
        .then(data => {
          setData(data);
        })
        .catch(err => {
          setError(err.message);
        });
    };
    fetchData();
  }, [url]);

  return { data, error };
};
export default useFetch;
