import React, { useContext, useEffect, useState } from 'react';

import GlobalStateContext from '../../global/GlobalStateContext';
import ResCard from './ResCard';



export const HomeScreen = () => {
  const {states, requests, setters} = useContext(GlobalStateContext);
  const [search, setSearch] = useState('');
  
 

  useEffect(() => {
    requests.getRestaurantes();
    setters.setRestaurantesRender(false);
    
  }, [])
  

  useEffect(() => {
  let list = states.restaurantes.restaurants;
  
  if (search != '') {

    const novaLista = list.filter((r) => {
      if(r.name == search) {
        return true
        } else {
          return false
        }

      
    });

    const novaListaFinal = (novaLista ? novaLista : []) 
    setters.setRestaurantesRender(novaListaFinal); 
   
  } else {
    setters.setRestaurantesRender(list)
  }

  }, [search])


  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
  <div>

    <input type="text" value={search} onChange={(event) => {handleSearch(event)} } placeholder="Restaurante" />
    
    {states.restaurantes.restaurants ? <ResCard rests={states.restaurantesRender ? states.restaurantesRender.restaurants : states.restaurantes.restaurants}/> : <h2>Loading...</h2>}
    
  
  
  </div>

  )
}
export default HomeScreen;