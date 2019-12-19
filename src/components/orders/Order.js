import React, {Fragment} from 'react';
import {Link} from 'react-router-dom'

const Order = (props) => {

  if (!props.order){
    return "Loading..."
  }

  const url = "/orders/" + props.order.id;

  return (
    <Fragment>
    <p>Customer Name: {props.order.customer.name}</p>
    <p>Order ID: {props.order.id}</p>
    <p>Price: {props.order.dishes[0].price}</p>
    <p>Collection Time: {props.order.collectionTime}</p>
    <p>Restaurant: {props.order.restaurant.name}</p>
    <br></br>

    </Fragment>
  )
}

export default Order;
