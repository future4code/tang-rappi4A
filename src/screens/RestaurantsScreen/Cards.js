import React, {useEffect}from "react"
import {Botão, ContainerImagem, ContainerPage, Containers, FontPrincipal, Imagem, InformaçõesProduto, Paragrafos, ParagrafoSpan, Titulo, Titulos2} from "../RestaurantsScreen/styled"

  const Cards = (props) => {
      return(
        <div>
          <Titulo>
            <strong>{props.name}</strong>
          </Titulo>
          <ContainerImagem>
            <Imagem src={props.logoUrl}/>
          </ContainerImagem>
          <div>
            <FontPrincipal>{props.name}</FontPrincipal>
            <Paragrafos>{props.category}</Paragrafos>
            <Paragrafos>{props.deliveryTime} min</Paragrafos>
            <Paragrafos>Frete: R${props.shipping}</Paragrafos>
            <Paragrafos>{props.address}</Paragrafos>
          </div>
      </div>
      )
      
  }

  export default Cards