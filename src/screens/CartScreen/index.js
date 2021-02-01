import React from 'react';
import {AddressName, AddressTitle, Cart, HeaderCart, TitleCart, NameRestaurant, AddressRestaurant, TimeDelivery, OrderedItems, RestaurantImage, OrderDescription, DescriptionItem, OrderNumber, CartPage, RemoveButton, PaymentForm, PaymentLabel, Forma, ButtonConfirmation, PaymentFormTitle, SubTotal, DeliveryPrice} from './styled'
import axios from 'axios'
import {BASE_URL} from '../../constants/urls'

const endereco = () => {
  axios.get(`${BASE_URL}/profile`, {
    headers: {
      'auth': 
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlRBWThUUFJ3ZzBuV1BCeTdZUlQ3IiwibmFtZSI6IkFsYW4gS29uaGV2YWxpYyIsImVtYWlsIjoiYWxhbi5wYXRyaWNrLmtvbmhldmFsaWNAaG90bWFpbC5jb20iLCJjcGYiOiIyMjIuMjIyLjIyMi4tOTkiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gQWZvbnNvIEJyYXosIDE3NywgNzEgLSBWaWxhIE4uIENvbmNlacOnw6NvIiwiaWF0IjoxNjEyMTEzNDU4fQ.smkTNeLtm4cgvTEnqcL5wt_skDo1kdeIz1zNS4TsGo8'
    }
  })
  .then(res => console.log(res.data.user.address))
  .catch(err => console.log(err))
}

endereco()

export const CartScreen = () => {
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
          {/* {endereco.map((end) => {
            return (
              <p>
                {end.user}
              </p>
            )
          })} */}
          Rua Alessandra Vieira, 42
        </AddressName>
      </HeaderCart>
      <NameRestaurant>
        Bullguer Vila Madalena
      </NameRestaurant>
      <AddressRestaurant>
        R. Fradique Coutinho, 1136 - Vila Madalena
      </AddressRestaurant>
      <TimeDelivery>
        30 - 45 min
      </TimeDelivery>
      <OrderedItems>
        <RestaurantImage src="http://soter.ninja/futureFoods/logos/mexicanissimo.png"/>
        <OrderDescription>
          <NameRestaurant>
          Stencil
          </NameRestaurant>
          <DescriptionItem>
            Pão, carne, queijo, cebola roxa, tomate, alface e molho.
          </DescriptionItem>
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
      <OrderedItems>
        <RestaurantImage src="http://soter.ninja/futureFoods/logos/mexicanissimo.png"/>
        <OrderDescription>
          <NameRestaurant>
          Stencil
          </NameRestaurant>
          <DescriptionItem>
            Pão, carne, queijo, cebola roxa, tomate, alface e molho.
          </DescriptionItem>
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
      <OrderedItems>
        <RestaurantImage src="http://soter.ninja/futureFoods/logos/mexicanissimo.png"/>
        <OrderDescription>
          <NameRestaurant>
          Stencil
          </NameRestaurant>
          <DescriptionItem>
            Pão, carne, queijo, cebola roxa, tomate, alface e molho.
          </DescriptionItem>
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