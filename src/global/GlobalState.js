import React, { useState } from "react";
import GlobalStateContext from "../global/GlobalStateContext";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

const GlobalState = (props) => {

    const [restaurantes, setRestaurantes] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState([])

    const getRestaurantes = () => {
        const request = axios.get('https://us-central1-missao-newton.cloudfunctions.net/rappi4A/restaurants', {

            headers: {
                "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IldScHBFeExMdXI4SWU1WTVLMkVoIiwibmFtZSI6IlRpYWdvIFNlc3RhcmkiLCJlbWFpbCI6InRpYWdvc2VzdGFyaUBnbWFpbC5jb20iLCJjcGYiOiIyMjIuMjIyLjQ0NC0wOSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MiAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2MTIwMzgyNTJ9.lCXhVaCaDpHtB5D9zEZ34vBpAqCLgBP6wGj0nLs_STU"
            }
        })

        request.then((response) => setRestaurantes(response.data))
        
    }
  
  const states = {restaurantes, categoryFilter};
  const requests = {getRestaurantes};
  const setters = {setCategoryFilter}

  
  const data = {states, requests, setters};

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;