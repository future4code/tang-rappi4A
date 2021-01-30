import React from "react";
import { Button, IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { AddressEditContainer, Container, ContainerButton, ContainerInput, Form, Header, Input, Title, TitleContainer } from './styled'

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

export const ProfileEditAdressScreen = () => {

  return (
    <ThemeProvider theme={theme}>
      <AddressEditContainer>
        <Header>
          <IconButton>
            <ArrowBackIosIcon />
          </IconButton>
          <Title>
            <TitleContainer>
              Endereço
            </TitleContainer>
          </Title>
          <div></div>
        </Header>
        <Container>
          <Form>
            <ContainerInput>
              <Input
                color="primary"
                fullWidth="bool"
                label="Logradouro"
                margin="normal"
                name="street"
                type="text"
                variant="outlined"
                placeholder="Logradouro"
                required
              >
              </Input>
            </ContainerInput>
            <ContainerInput>
              <Input
                color="primary"
                fullWidth="bool"
                label="Número"
                margin="normal"
                name="number"
                type="number"
                variant="outlined"
                placeholder="Número"
                required
              >
              </Input>
            </ContainerInput>
            <ContainerInput>
              <Input
                color="primary"
                fullWidth="bool"
                label="Complemento"
                margin="normal"
                name="complemento"
                type="text"
                variant="outlined"
                placeholder="Apto / Bloco"
              >
              </Input>
            </ContainerInput>
            <ContainerInput>
              <Input
                color="primary"
                fullWidth="bool"
                label="Bairro"
                margin="normal"
                name="neighbourhood"
                type="text"
                variant="outlined"
                placeholder="Bairro"
                required
              >
              </Input>
            </ContainerInput>
            <ContainerInput>
              <Input
                color="primary"
                fullWidth="bool"
                label="Cidade"
                margin="normal"
                name="city"
                type="text"
                variant="outlined"
                placeholder="Cidade"
                required
              >
              </Input>
            </ContainerInput>
            <ContainerInput>
              <Input
                fullWidth="bool"
                color="primary"
                label="Estado"
                margin="normal"
                name="state"
                type="text"
                variant="outlined"
                placeholder="Estado"
                required
              >
              </Input>
            </ContainerInput>
            <ContainerButton>
              <Button
                color="primary"
                fullWidth="bool"
                size="large"
                variant="contained"
              >Salvar
              </Button>
            </ContainerButton>
          </Form>
        </Container>
      </AddressEditContainer>
    </ThemeProvider>
  )
}