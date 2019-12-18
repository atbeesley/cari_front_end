import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

const Customer = (props) => {

if (!props.customer){
  return "Loading.... please be patient"
}

const url = "/customers/" + props.customer.id;

return (
  <Fragment>

  <p>Name: {props.customer.name}</p>

  </Fragment>

)

}

export default Customer
