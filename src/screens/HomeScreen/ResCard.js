import React, { useContext, useEffect } from 'react';
import ResCardStyles from './ResCardStyles.css'




export const ResCard = (props) => {
    const {rests, search} = props;

    let filteredList = rests.filter(
        (r) => {
            return r.name.indexOf(search) !== -1;
        }
    )

   useEffect (() => {
       console.log(filteredList);
   }, [search])

  return (
  <div>

      {filteredList.length !== 0 ? filteredList.map((r, index) => {
        
        
        return (
            <div key={index} className="ResCard">
                <img src={r.logoUrl} />
                <div className="ResCardDetails">                
                    <div>{r.name}</div>
                    <div>
                        <div>{String(Number(r.deliveryTime) - 10) + " - " + r.deliveryTime + ' min'}</div>
                        <div>{"Frete: R$" + r.shipping.toFixed(2)}</div>
                    </div>
                </div>
            </div>
        )
        
        
      }
      ) : <h4>Não encontramos um restaurante com esse nome</h4> }
    
  
  
  </div>

  )
}
export default ResCard;