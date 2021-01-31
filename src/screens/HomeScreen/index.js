import React, { useContext, useEffect, useState } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';
import ResCard from './ResCard';
import Main from './main.css';


export const HomeScreen = () => {
  const {states, requests, setters} = useContext(GlobalStateContext);
  const [search, setSearch] = useState('');
  
 

  useEffect(() => {
    requests.getRestaurantes(); 
  }, [])
  
  
  
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
  <div className="main">

    <input type="text" value={search} onChange={(event) => {handleSearch(event)} } placeholder="Restaurante"  className="searchbar" />
    
    {states.restaurantes.restaurants ? <ResCard rests={states.restaurantes.restaurants} search={search} /> : <h2>Loading...</h2>}
    
  
  
  </div>

  )
}
export default HomeScreen;