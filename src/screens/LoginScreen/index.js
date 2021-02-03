import React from 'react';
import Logo from "../../assets/Rappi4-logo-fundo-vermelho.svg"
import {Button} from "@material-ui/core";
//import { LoginContainer, FormsContainer} from './styled';
import {goToSignUpScreen} from "../../routes/Coordinator"
import { LoginForm } from './LoginForm';
import { useHistory } from 'react-router-dom';

export const LoginScreen = () => {
    const history = useHistory()


  return (
  <div>
    <div>
      <img src ={Logo}/>
        <p>Entrar</p>
          <LoginForm/>

           <Button
            onClick={() => goToSignUpScreen(history)}
            variant={"contained"}
            margin={"normal"}
            color={"primary"}
            fullWidth
         >
            Não possui cadastro? Clique aqui.
          </Button>
        </div>
      
      </div>
  )
}