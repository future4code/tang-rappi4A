import React from 'react';
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import useForm from '../../hooks/useForm';
import {ButtonContainer, InputsContainer} from " ./styled"

export const SignUp = () => {
  const [form, handLeInput] = useForm({email: "", password:""})

  const submitForm = (event) => {
  event.preventDefault()
  console.log(form)
 }

  return (
     
    <InputsContainer>
    <form id= {"signup_form"}onSubmit={submitForm}>
    <TextField
      value={form.name}
      onChange={handLeInput}
      name={"nome"}
      label={"Nome"}
      margin={"normal"}
      variant={"outlined"}
      fullWidth 
      autoFocus
      type={"text"}
      required

    />

      <TextField
      value={form.email}
      onChange={handLeInput}
      name={"email"}
      label={"E-mail"}
      margin={"normal"}
      variant={"outlined"}
      fullWidth 
      type={"email"}
      required

    />

      <TextField
      value={form.cpf}
      onChange={handLeInput}
      name={"cpf"}
      label={"CPF"}
      margin={"normal"}
      variant={"outlined"}
      fullWidth
      required
      type={"number"}


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

    <ButtonContainer>
      <Button
        type={"submit"}
        variant={"contained"}
        color={"primary"}
        funllWidth
    
      >
         Criar
      
         </Button>

        </ButtonContainer>
      </form>
    </InputsContainer>
  
  )
}