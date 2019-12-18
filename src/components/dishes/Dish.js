import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Dish = (props) => {

  if (!props.dish){
    return "Loading..."
  }

  const url = "/dishes/" + props.dish.id;

  return (
    <Fragment>
    <Link to = {url} className="name">
    {props.dish.name}
    </Link>
    <p>{props.dish.name}</p>
    </Fragment>
  )
}
export default Dish
