import React, { useContext, useEffect, useState } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';
import Logoimg from "../../assets/Rappi4-logo-fundo-branco.svg"
import {HomeContainer, Logo, CFilters} from './styled';
import ResCard from './ResCard';
import Main from './main.css';
import CategoryFilters from './CategoryFilters';


export const HomeScreen = () => {
  const {states, requests, setters} = useContext(GlobalStateContext);
  const [search, setSearch] = useState('');
  
  
 

  useEffect(() => {
    requests.getRestaurantes(); 
  }, [])
  
  console.log(states)
  
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  

  return (
  <HomeContainer>

    <Logo><img src={Logoimg} /></Logo>

    <input type="text" value={search} onChange={(event) => {handleSearch(event)} } placeholder="Restaurante"  className="searchbar" />

    <CFilters>
      {states.restaurantes.restaurants ? 

      states.restaurantes.restaurants.map((r,index) => {

      return(
        <CategoryFilters restsCats={r.category} key={index} /> 
            )
      } 
     ) : <></> }
    </CFilters>


    {states.restaurantes.restaurants ? <ResCard rests={states.restaurantes.restaurants} search={search} cat={states.categoryFilter} /> : <h2>Loading...</h2>}
    
  
  
  </HomeContainer>

  )
}
export default HomeScreen;