import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Dish = (props) => {

  if (!props.dish){
    return "Loading..."
  }

  const url = "/dishes/" + props.dish.id;

  return (
    <Fragment>
    <div className="dishBox">
    <p>Name:{props.dish.name}</p>
    <p>Order ID:{props.dish.order.id}</p>
    <p>Price:{props.dish.order.price}</p>
    <p>Spice Level: {props.dish.spiceLevel}</p>
    <br></br>
    </div>

    </Fragment>
  )
}
export default Dish
