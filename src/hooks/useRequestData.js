import {useEffect, useState} from "react"
import axios from "axios"

const useRequestData = (inicialData, url) => {
  
  
  const [data, setData] = useState(inicialData);
  console.log(data)
  const header = {headers: {"auth": localStorage.getItem('token')}}

  useEffect(() => {
    axios
    .get(url, header)
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