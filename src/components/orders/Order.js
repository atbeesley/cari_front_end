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
    <p>: {props.order.id}</p>

    </Fragment>
  )
}

export default Order;
