import React, { useContext, useEffect, useState } from 'react';
import {Botão, ContainerImagem, ContainerPage, Containers, Imagem2, FontPrincipal, Image, InformaçõesProduto, Paragrafos, ParagrafoSpan, Titulo, Titulos2} from "../RestaurantsScreen/styled"
import Cards from "./Cards"
import useRequestData from '../../hooks/useRequestData';
import {BASE_URL}from "../../constants/urls"
import axios from "axios"
import {useParams, useHistory} from "react-router-dom"
import GlobalStateContext from "../../global/GlobalStateContext"
import useProtectedPage from "../../hooks/useProtectPage"
import { RestaurantSharp } from '@material-ui/icons';

export const RestaurantsScreen = () => {
  // useProtectedPage()
  
  const [restaurants, setRestaurants] = useState([])
  const [products, setProducts] = useState([])
  // const {states, setters, requests} = useContext(GlobalStateContext)
    
    const history = useHistory();
    const params = useParams()

    // useEffect(() => {
    //    requests.getRestaurantes();
    // },[]);

    useEffect(() => {
      axios.get(`${BASE_URL}/restaurants/5`,{headers: {"auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IldScHBFeExMdXI4SWU1WTVLMkVoIiwibmFtZSI6IlRpYWdvIFNlc3RhcmkiLCJlbWFpbCI6InRpYWdvc2VzdGFyaUBnbWFpbC5jb20iLCJjcGYiOiIyMjIuMjIyLjQ0NC0wOSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MiAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2MTIwMzgyNTJ9.lCXhVaCaDpHtB5D9zEZ34vBpAqCLgBP6wGj0nLs_STU"}})
      .then((response) => {
          setRestaurants(response.data.restaurant)
      }).catch((error) => {
      })
      }, [])

      // const HeadleButton = (event) => {
      //   event.target
      // }

  return (
      <ContainerPage>
        <Cards 
        name={restaurants.name}
        logoUrl={restaurants.logoUrl}
        category={restaurants.category}
        deliveryTime={restaurants.deliveryTime}
        shipping={restaurants.shipping}
        address={restaurants.address}
        />
        {restaurants.products && restaurants.products.map((item) => {
          return (
            <Containers>
                <Imagem2 src={item.photoUrl}></Imagem2>
              <InformaçõesProduto>
                <FontPrincipal>{item.name}</FontPrincipal>
                  <span>{item.description}</span>
                <ParagrafoSpan>
                <span>R$ {item.price}</span>
                  <Botão onClick={null}>Adicionar</Botão>
                </ParagrafoSpan>
              </InformaçõesProduto>
            </Containers> 
            )
        })}    

          {/* <Titulos2><strong>Acompanhamentos</strong></Titulos2>
          <Containers>
              <div>
                <img src={"https://picsum.photos/97/113"}></img>
              </div>
              <InformaçõesProduto>
                <FontPrincipal>Bullguer</FontPrincipal>
                <span>Pão, carne, queijo, picles e molho</span>
                <ParagrafoSpan>
                  <span>R$ 20,00</span>
                  <Botão>Remover</Botão>
                </ParagrafoSpan>           
              </InformaçõesProduto>
          </Containers> */}
      </ContainerPage>
  ) 
}
