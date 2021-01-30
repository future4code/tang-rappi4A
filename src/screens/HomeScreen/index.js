import React, { useContext, useEffect } from 'react';
import {HomeContainer} from './styled';
import Logo from "../../assets/Rappi4-logo-fundo-branco.svg"
import GlobalStateContext from '../../global/GlobalStateContext';



export const HomeScreen = () => {

  const {states, requests} = useContext(GlobalStateContext);

  useEffect(() => {
    requests.getRestaurantes();
  }, [])

  return (
  <div>
    
  
  
  </div>

  )
}
export default HomeScreen;