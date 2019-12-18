import React from 'react';
import Restaurant from './Restaurant.js';

const RestaurantList = (props) => {

if (props.restaurant.length === 0){
  return (<p>Loading...</p>)
}

const restaurant = props.restaurant.map((restaurant, index) => {
  return (
    <li key={index} className="component-item">
    <div className="component">
    <Restaurant restaurant={restaurant}/>
    </div>
    </li>
  )
})

return (
  <ul className="component-list">
  {restaurant}
  </ul>
)
}
export default RestaurantList;
