import React from 'react';
import Logo from "../../assets/Rappi4-logo-fundo-vermelho.svg"
import {Button} from "@material-ui/core";
//import { SignUpContainer, FormsContainer} from './styled';
import {goToSignUpScreen} from "../../routes/Coordinator"
import { useHistory } from 'react-router-dom';
import {SignUpForm} from "./SignUpForm";

export const SignUpScreen = () => {
    const history = useHistory()


  return (
  <div>
    <div>
      <img src ={Logo}/>
        <p>Entrar</p>
          <SignUpForm/>

           
        </div>
      
      </div>
  )
}