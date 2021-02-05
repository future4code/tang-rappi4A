import React, { useState, useEffect, useContext } from 'react';
import {AddressName, AddressTitle, Cart, HeaderCart, TitleCart, NameRestaurant, AddressRestaurant, TimeDelivery, OrderedItems, RestaurantImage, OrderDescription, DescriptionItem, OrderNumber, CartPage, RemoveButton, PaymentForm, PaymentLabel, Forma, ButtonConfirmation, PaymentFormTitle, SubTotal, DeliveryPrice} from './styled'
import axios from 'axios'
import {BASE_URL} from '../../constants/urls'
import GlobalStateContext from '../../global/GlobalStateContext';

export const CartScreen = () => {
  const {states, setters, requests} = useContext(GlobalStateContext);
  const [pedidos, setPedidos] = useState()

  useEffect(() => {
    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/rappi4A/active-order`, {
      headers: {
        'auth': 
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlRBWThUUFJ3ZzBuV1BCeTdZUlQ3IiwibmFtZSI6IkFsYW4gS29uaGV2YWxpYyIsImVtYWlsIjoiYWxhbi5wYXRyaWNrLmtvbmhldmFsaWNAaG90bWFpbC5jb20iLCJjcGYiOiIyMjIuMjIyLjIyMi4tOTkiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gQWZvbnNvIEJyYXosIDE3NywgNzEgLSBWaWxhIE4uIENvbmNlacOnw6NvIiwiaWF0IjoxNjEyMTEzNDU4fQ.smkTNeLtm4cgvTEnqcL5wt_skDo1kdeIz1zNS4TsGo8'
      }
    })
    .then(res => setPedidos(res.data.order.restaurantName))
    .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    requests.getRestaurantes()
  }, [])
  console.log(states)

  return (
  <CartPage>
    <Cart>
      <TitleCart>
        Meu Carrinho
      </TitleCart>
      <HeaderCart>
        <AddressTitle>
          Endereço de Entrega
        </AddressTitle>
        <AddressName>
          Rua Alessandra Vieira, 42
        </AddressName>
      </HeaderCart>
        {
          states.restaurantes.restaurants ? 
          states.restaurantes.restaurants.map((end)=>{
            if (end.name == pedidos) {
              return (
              <NameRestaurant>
                {end.name}
              </NameRestaurant>
              )
            }
          })  : <></>
        }
        {
          states.restaurantes.restaurants ? 
          states.restaurantes.restaurants.map((end)=>{
            if (end.name == pedidos) {
              return (
              <AddressRestaurant>
                {end.address}
              </AddressRestaurant>
              )
            }
          })  : <></>
        }
        {
          states.restaurantes.restaurants ? 
          states.restaurantes.restaurants.map((end)=>{
            if (end.name == pedidos) {
              return (
              <TimeDelivery>
                {end.deliveryTime} min
              </TimeDelivery>
              )
            }
          })  : <></>
        }
      <OrderedItems>
        <RestaurantImage src="http://soter.ninja/futureFoods/logos/mexicanissimo.png"/>
        <OrderDescription>
          <NameRestaurant>
            {pedidos}
          </NameRestaurant>
          {
              states.restaurantes.restaurants ? 
              states.restaurantes.restaurants.map((end)=>{
                let idRestaurante = end.id
                return (
                  <DescriptionItem>
                    {idRestaurante}
                  </DescriptionItem>
                )}) : <></>
            }
          
          <AddressName>
            R$ 46,00
          </AddressName>
          <OrderNumber>
            2
          </OrderNumber>
          <RemoveButton>
            remover
          </RemoveButton>
        </OrderDescription>
      </OrderedItems>
      <DeliveryPrice>
        R$ 6,00
      </DeliveryPrice>
      <SubTotal>
        <AddressName>
          SUBTOTAL
        </AddressName>
        <NameRestaurant>
          R$ 67,00
        </NameRestaurant>
      </SubTotal>
      <Forma>
      <PaymentFormTitle>
        <p>Forma de pagamento</p>
      <hr/>
      </PaymentFormTitle>
      
        <PaymentForm>
          <input type="radio" id="#" name="option" value="option 01"></input>
          <label for="option 01">Dinheiro</label> <br/>
          <input type="radio" id="#" name="option" value="option 02"></input>
          <label for="option 02">Cartão de crédito</label>
        </PaymentForm>
        <ButtonConfirmation>
          Confirmar
        </ButtonConfirmation>
      </Forma>
      
    </Cart>
  </CartPage>)
}