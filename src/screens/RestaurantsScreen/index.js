import React, { useContext, useEffect, useState } from 'react';
import {Botão, ContainerImagem, Containers, FontPrincipal, InformaçõesProduto, Paragrafos, ParagrafoSpan, Titulo, Titulos2} from "../RestaurantsScreen/styled"
import Cards from "./Cards"
import useRequestData from '../../hooks/useRequestData';
import {BASE_URL}from "../../constants/urls"
import {useParams, useHistory} from "react-router-dom"
import axios from "axios"
import GlobalStateContext from "../../global/GlobalStateContext"

export const RestaurantsScreen = () => {

  
  
  const [restaurants, setRestaurants] = useState([])
  const {states, setters, requests} = useContext(GlobalStateContext)
    
    const history = useHistory();
    const params = useParams()

    useEffect(() => {
       requests.getRestaurantes();
       
    },[]);

    console.log(states)
    console.log(restaurants)
    // const data = useRequestData({}, `${BASE_URL}/restaurants/${params.id}`)
    
    // useEffect(() => {
    //   axios.get(`${BASE_URL}/restaurants/${params.id}`,{headers: {"auth": getRestaurants()}})
    //   .then((response) => {
    //     console.log(response.data.restaurant.product)
    //       setRestaurants(response.data.restaurant.product)
    //   }).catch((error) => {
    //       console.log(error.message)
    //   })
    //   }, [params.id])

    //   useEffect(() => {
    //     if (states.restaurante && states.restaurante.products) {
    //         let arrayMap = states.restaurante.products.map((item) => {
    //             return item.category
    //         })
    //         const uniqueSet = new Set(arrayMap)
    //         arrayMap = [...uniqueSet]
    //         setCategorias(arrayMap)
    //     }
    // }, [states.restaurante])

  return (
      <div>
        <Cards/>
        <Titulos2><strong>Principais</strong></Titulos2>
          <Containers>
              <div>
              <img src={"https://picsum.photos/97/113"}></img>
              </div>
            <InformaçõesProduto>
              <FontPrincipal>Bullguer</FontPrincipal>
                <span>Pão, carne, queijo, picles e molho</span>
                <ParagrafoSpan>
                <span>R$ 20,00</span>
                  <Botão onClick={null}>Adicionar</Botão>
                </ParagrafoSpan>
              </InformaçõesProduto>
          </Containers>
          <Titulos2><strong>Acompanhamentos</strong></Titulos2>
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
          </Containers>
      </div>
  ) 
}
