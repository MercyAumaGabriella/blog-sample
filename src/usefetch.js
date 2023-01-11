import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // for stopping the fetch
    const abortCont = new AbortController();

    setTimeout(() => {
      // fetch is now associated with the abort controller
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data for the resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);

          // for loading scene
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);

    // aborts the fetch associated with
    return () => abortCont.abort();
  }, [url]);

  return {
    data,
    isPending,
    error,
  };
};

export default useFetch;
