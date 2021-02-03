import React, { useContext, useEffect } from 'react';
import ResCardStyles from './ResCardStyles.css'
import GlobalStateContext from '../../global/GlobalStateContext';




export const ResCard = (props) => {
    const {rests, search, cat} = props;
    const {states, setters} = useContext(GlobalStateContext);

    let filteredList = rests.filter(
        (r) => {
            if (cat.length > 0) {
                return (r.name.indexOf(search) !== -1 && cat.indexOf(r.category) !== -1);
            } else {
                return (r.name.indexOf(search) !== -1 );
                
            }
        }
    )

   

  return (
  <div>

      {filteredList.length !== 0 ? filteredList.map((r, index) => {
        
        
        return (
            <div key={index} className="ResCard">
                <img src={r.logoUrl} />
                <div className="ResCardDetails">                
                    <div className='resname'>{r.name}</div>
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