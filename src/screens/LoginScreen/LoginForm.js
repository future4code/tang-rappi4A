import React from 'react';
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import useForm from '../../hooks/useForm';
//import {ButtonContainer, InputsContainer} from " ./styled"

export const LoginForm = () => {
  const [form, handLeInput] = useForm({email: "", password:""})

  const submitForm = (event) => {
  event.preventDefault()
  console.log(form)
 }

  return (
     
    <div>
    <form id= {"login_form"}onSubmit={submitForm}>
      <TextField
      value={form.email}
      onChange={handLeInput}
      name={"email"}
      label={"E-mail"}
      margin={"normal"}
      variant={"outlined"}
      fullWidth 
      autoFocus
      type={"email"}
      required

    />

    <TextField
      value={form.password}
      onChange={handLeInput}
      name={"password"}
      label={"Senha"}
      margin={"normal"}
      variant={"outlined"}
      fullWidth
      required
      type={"password"}


    />
    
    <div>
      <Button
        type={"submit"}
        variant={"contained"}
        color={"primary"}
        funllWidth
    
      >
         Entrar
      
         </Button>

        </div>
      </form>
    </div>
  
  )
}