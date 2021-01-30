import React from 'react';
import { Divider, IconButton, Typography } from '@material-ui/core';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import { ReactComponent as AvatarSelectedIcon } from '../../assets/avatar-selected.svg';
import { ReactComponent as HomePageIcon } from '../../assets/homepage.svg';
import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-cart.svg';
import { ContainerAdressInfo, ContainerIcon, ContainerIconFooter, ContainerFooter, ContainerOrder, ContainerOrderHistory, ContainerProfileInfo, ContainerProfileText, Header, ProfilePageContainer, Title, TitleContainer } from './styled';

export const ProfileScreen = () => {

  const user = [
    {
      id: '1',
      name: 'Bruna Oliveira',
      email: 'bruna_o@gmail.com',
      cpf: '333.333.333-33',
      address: 'Rua Alessandra Vieira, 42 - Santana',
    }
  ]

  const orders = [
    {
      id: 1,
      restaurante: "Outback SteakHouse",
      data: "11 de setembro de 2020",
      valor: 89,
    },
    {
      id: 2,
      restaurante: "Coréu Burguer",
      data: "17 de outubro de 2020",
      valor: 19,
    },
    {
      id: 3,
      restaurante: "Mais Lanches",
      data: "21 de novembro de 2020",
      valor: 29.4,
    },
  ]

  const renderUser = () => {
    return (
      user.map((item) => {
        return (
          <div key={item.id}>
            <ContainerProfileInfo>
              <ContainerProfileText>
                <Typography>{item.name}</Typography>
                <Typography>{item.email}</Typography>
                <Typography>{item.cpf}</Typography>
              </ContainerProfileText>
              <ContainerIcon>
                <IconButton>
                  <CreateOutlinedIcon />
                </IconButton>
              </ContainerIcon>
            </ContainerProfileInfo>
            <ContainerAdressInfo>
              <ContainerProfileText>
                <Typography style={{ color: "grey" }}>Endereço cadastrado</Typography>
                <Typography>{item.address}</Typography>
              </ContainerProfileText>
              <ContainerIcon>
                <IconButton >
                  <CreateOutlinedIcon />
                </IconButton>
              </ContainerIcon>
            </ContainerAdressInfo>
          </div>
        )
      })
    )
  }

  const renderOrders = () => {
    if (orders.length > 0) {
      return (
        orders.map((item) => {
          return (
            <ContainerOrder key={item.id}>
              <Typography variant="h6" color="primary">{item.restaurante}</Typography>
              <Typography variant="subtitle2">{item.data}</Typography>
              <Typography variant="h6">SUBTOTAL R${item.valor.toFixed(2)}</Typography>
            </ContainerOrder>
          )
        })
      )
    } else {
      return (
        <Typography
          align="center"
          style={{ marginTop: 30 }}>Você não realizou nenhum pedido</Typography>
      )
    }
  }

  return (
    <ProfilePageContainer>
      <Header>
        <TitleContainer>
          <Title>Meu perfil</Title>
        </TitleContainer>
      </Header>
      <div>
        {renderUser()}
      </div>
      <ContainerOrderHistory>
        <Typography>Histórico de pedidos</Typography>
        <Divider variant="middle" />
        <div>
          {renderOrders()}
        </div>
      </ContainerOrderHistory>
      <ContainerFooter>
        <ContainerIconFooter>
          <IconButton>
            <HomePageIcon />
          </IconButton>
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
          <IconButton>
            <AvatarSelectedIcon />
          </IconButton>
        </ContainerIconFooter>
      </ContainerFooter>
    </ProfilePageContainer>
  )
}