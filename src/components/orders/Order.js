import React from 'react';
import {Link} from 'react-router-dom'

const Order = (props) => {

  if (!props.order){
    return "Loading..."
  }

  const url = "/orders/" + props.order.id;

  return (
    <div>
    <Link to = {url} className="name">
    {props.order.customerName}
    </Link>
    <p>: {props.order.userName}</p>
    <p>: {props.order.emailAddress}</p>
    <p>: {props.order.riceLevel}</p>
    <p>: {props.order.riceType}</p>
    <p>: {props.order.spiceLevel}</p>
    <p>: {props.order.ingredient}</p>
    <p>: {props.order.topping}</p>

    </div>
  )
}

export default Order;
