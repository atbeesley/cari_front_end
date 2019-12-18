import React from 'react';
import Dish from './Dish.js';

const DishList = (props) => {

  if(props.dishes.length === 0){
    return(<p>Loading...</p>)
  }

  const dishes = props.dishes.map((dish, index) => {
    return(
      <li key={index} className="component-item">
      <div className="component">
      <Dish dish={dish}/>
      </div>
      </li>
    )
  })

  return (
    <ul className="component-list">
    {dishes}
    </ul>
  )
}
export default DishList
