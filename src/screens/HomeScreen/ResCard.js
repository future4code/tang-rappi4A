import React, { useContext, useEffect } from 'react';
import ResCardStyles from './ResCardStyles.css'




export const ResCard = (props) => {
    const {rests} = props;

  return (
  <div>

      {rests && rests.map((r, index) => {
        
        
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
      )}
    
  
  
  </div>

  )
}
export default ResCard;