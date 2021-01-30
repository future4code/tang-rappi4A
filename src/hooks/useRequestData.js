import {useEffect, useState} from "react"
import axios from "axios"

const useRequestData = (inicialData, url) => {
  const [data, setData] = useState(inicialData);

  useEffect(() => {
    axios
    .get(url)
    .then((response) => {
    setData(response.data);
    })
    .catch(( error) => {
      console.log(error);
      alert("Ocorreu um erro");
    });
  }, [url]);
  return data;
};

export default useRequestData;