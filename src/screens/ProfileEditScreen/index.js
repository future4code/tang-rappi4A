import React from "react";
import { Button, IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  Container, ContainerButton, ContainerInput, Form, Header,
  Input, ProfileEditContainer, Title, TitleContainer
} from './styled';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#E86E5A",
      contrastText: 'black'
    },
    secondary: {
      main: "#008000",
    },
  },
});

export const ProfileEditScreen = () => {

  return (
    <ThemeProvider theme={theme}>
      <ProfileEditContainer>
        <Header>
          <IconButton>
            <ArrowBackIosIcon />
          </IconButton>
          <TitleContainer>
            <Title>Editar</Title>
          </TitleContainer>
          <div></div>
        </Header>
        <Container>
          <Form>
            <ContainerInput>
              <Input
                fullWidth="bool"
                color="primary"
                variant="outlined"
                margin="normal"
                label="Nome"
                type="name"
                name="name"
                placeholder="Nome"
                required
              >
              </Input>
            </ContainerInput>
            <ContainerInput>
              <Input
                fullWidth="bool"
                color="primary"
                variant="outlined"
                margin="normal"
                label="E-mail"
                type="email"
                name="email"
                placeholder="E-mail"
                required
              >
              </Input>
            </ContainerInput>
            <ContainerInput>
              <Input
                fullWidth="bool"
                color="primary"
                variant="outlined"
                margin="normal"
                label="CPF"
                type="text"
                name="cpf"
                placeholder="CPF"
                required
              >
              </Input>
            </ContainerInput>
            <ContainerButton>
              <Button fullWidth="bool" size="large" variant="contained" color="primary">Salvar</Button>
            </ContainerButton>
          </Form>
        </Container>
      </ProfileEditContainer>
    </ThemeProvider>
  )
}