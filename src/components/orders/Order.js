import React, {Fragment} from 'react';
import {Link} from 'react-router-dom'

const Order = (props) => {

  if (!props.order){
    return "Loading..."
  }

  const url = "/orders/" + props.order.id;

  return (
    <Fragment>
    <Link to = {url} className="name">
    {props.order.customerName}
    </Link>
    <p>Name: {props.order.customer.name}</p>
    <p>ID: {props.order.id}</p>
    <p>Price: {props.order.price}</p>

    </Fragment>
  )
}

export default Order;
