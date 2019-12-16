import React  from 'react';
import Order from "./Order";
import {Link} from 'react-router-dom'

const OrderDetail = (props) => {
  // if (!props.order){
  //   return "Loading..."
  // }

  const handleDelete = () => {
    props.onDelete(props.order.id)
  }

  // const raids = props.pirate.raids.map((raid, index) => {
  //   return <li key={index}>{raid.location}</li>
  // })

  const editUrl = "/orders/" + props.order.id + "/edit"

  return (
    <div className = "component">
    <Order order = {props.order}/>
    <p>Orders:</p>
    <ul>
    
    </ul>
    <button onClick={handleDelete}>Delete {props.order.customerName}</button>
    <Link to= {editUrl}><button type="button">Edit {props.order.customerName}</button></Link>
    </div>
  )
}

export default OrderDetail;
