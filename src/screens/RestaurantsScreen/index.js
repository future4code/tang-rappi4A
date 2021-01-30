import React, { useEffect } from 'react';
import {Botão, ContainerImagem, Containers, FontPrincipal, InformaçõesProduto, Paragrafos, ParagrafoSpan, Titulo, Titulos2} from "../RestaurantsScreen/styled"
import Cards from "./Cards"
import useRequestData from '../../hooks/useRequestData';
import {BASE_URL}from "../../constants/urls"
import {useParams} from "react-router-dom"

export const RestaurantsScreen = () => {
  // const {state, setState} = useContext(GlobalStateContext)
  const params = useParams()

  const restaurantDetail = useRequestData(`${BASE_URL}/restaurants/${params.id}`, {});
  console.log(restaurantDetail)

  useEffect(() => {
    console.log(restaurantDetail)
  }, [restaurantDetail])




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
