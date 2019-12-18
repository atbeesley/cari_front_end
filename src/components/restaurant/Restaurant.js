import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';

const Restaurant = (props) => {
  if (!props.restaurant){
    return "Loading..."
  }

  const url = '/restaurants/' + props.restaurant.id;
  return (
    <Fragment>
    <Link to = {url} className="name">
    {props.restaurant.name}
    </Link>
    </Fragment>

  )
}
export default Restaurant
