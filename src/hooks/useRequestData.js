import {useEffect, useState} from "react"
import axios from "axios"
import { BASE_URL } from "../constants/urls";

const useRequestData = (inicialData, endpoint) => {
  
  const [data, setData] = useState(inicialData);
  console.log(data)
  // const header = {headers: {"auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IldScHBFeExMdXI4SWU1WTVLMkVoIiwibmFtZSI6IlRpYWdvIFNlc3RhcmkiLCJlbWFpbCI6InRpYWdvc2VzdGFyaUBnbWFpbC5jb20iLCJjcGYiOiIyMjIuMjIyLjQ0NC0wOSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MiAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2MTIwMzgyNTJ9.lCXhVaCaDpHtB5D9zEZ34vBpAqCLgBP6wGj0nLs_STU"}}

  useEffect(() => {
    axios
    .get(`${BASE_URL}${endpoint}`, {
      headers:{
        auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IldScHBFeExMdXI4SWU1WTVLMkVoIiwibmFtZSI6IlRpYWdvIFNlc3RhcmkiLCJlbWFpbCI6InRpYWdvc2VzdGFyaUBnbWFpbC5jb20iLCJjcGYiOiIyMjIuMjIyLjQ0NC0wOSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MiAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2MTIwMzgyNTJ9.lCXhVaCaDpHtB5D9zEZ34vBpAqCLgBP6wGj0nLs_STU"
      }
    })
    .then((response) => {
    setData(response.data);
    })
    .catch(( error) => {
      console.log(error);
      alert("Ocorreu um erro");
    });
  }, [endpoint]);
  
  return data;
};

export default useRequestData;