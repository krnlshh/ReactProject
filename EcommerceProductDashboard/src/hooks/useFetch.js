// TIME 4.00

import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);  
    setError(null);
    const abortController = new AbortController();
    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal: abortController.signal }); 
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}:${response.statusText}`);
        }
        const fetchedData = await response.json();
        if (!abortController.signal.aborted) {
          setData(fetchedData);
          setLoading(false);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
          setLoading(false);
        }        
      }
    };
    fetchData();
    return () => {
      abortController.abort();
    };
  }, [url]);

  return { loading, error, data };
};
export default useFetch;

