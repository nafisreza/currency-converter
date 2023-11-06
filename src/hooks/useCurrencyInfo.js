import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

  useEffect(() => {
    let api = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

    fetch(api)
    .then((res) => res.json())
    .then((res) => setData(res[currency]))
    console.log(data);
  }, [currency]);

  return data 
}

export default useCurrencyInfo;
