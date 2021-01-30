import React from "react"
import {Botão, ContainerImagem, Containers, FontPrincipal, InformaçõesProduto, Paragrafos, ParagrafoSpan, Titulo, Titulos2} from "../RestaurantsScreen/styled"

  const Cards = () => {
      return(
        <div>
          <Titulo>
            <strong>Restaurante</strong>
          </Titulo>
          <ContainerImagem>
            <img src={"https://picsum.photos/328/120"}/>
          </ContainerImagem>
          <div>
            <FontPrincipal>Nome do Restaurante</FontPrincipal>
            <Paragrafos>Burger</Paragrafos>
            <Paragrafos>50-60min</Paragrafos>
            <Paragrafos>Frete</Paragrafos>
            <Paragrafos>Rua Fradique Coutinho, 1136 - Vila Madalena</Paragrafos>
          </div>
      </div>
      )
      
  }

  export default Cards