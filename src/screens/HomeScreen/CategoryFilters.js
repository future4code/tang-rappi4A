import React, { useContext, useEffect, useState } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';



export const CategoryFilters = (props) => {
    const {states, setters} = useContext(GlobalStateContext);
    const {restsCats} = props;
    const [tick, setTick] = useState(false);

    const handleCheck = (event) => {
        setTick(!tick);
        let index = states.categoryFilter.indexOf(event.target.value);
        
        if (index < 0) {
          let newCategoryFilter = states.categoryFilter;
          newCategoryFilter.push(event.target.value);
          setters.setCategoryFilter(newCategoryFilter);
        } else {
          let newCategoryFilter = states.categoryFilter;
          newCategoryFilter.splice(index, 1);
          setters.setCategoryFilter(newCategoryFilter);      
        }
    
       console.log(states.categoryFilter)
      }


return(
    

    
      <div>
        <label for={restsCats}>{restsCats} </label>
        <input type="checkbox" value={restsCats} name={restsCats} checked={tick} onChange={(event) => {handleCheck(event)}} />
      </div>


)

}

export default CategoryFilters;