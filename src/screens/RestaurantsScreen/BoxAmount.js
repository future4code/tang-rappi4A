import React, {useState} from "react"
import boxCart from "./styledBox"
import {useHistory} from "react-router-dom"

 export const BoxAmount = () => {
    const history = useHistory()
    // const Amount = useRequestData([], "/restaurantes/:id")
    
  const [quantidade, setQuantidade] = useState([])

   return(
    <boxCart>
      <h3>Selecione a quantidade desejada</h3>
      <select>Quantidade</select>
      
    </boxCart>
  )
}  
    
  
