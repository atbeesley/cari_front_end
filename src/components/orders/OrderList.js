import React from 'react';
import Order from './Order.js';


const OrderList = (props) => {
	console.log(props);
	if (props.orders.length === 0){
	  return (<p>Loading...</p>)
	}

	const orders = props.orders.map((order, index) => {
	  return (
	    <li key={index} className="component-item">
	    <div className="component">
	    <Order order={order} />
	    </div>
	    </li>
	  )
	})

	return (
	  <ul className="component-list">
    <h1>hi</h1>
	  </ul>
	)
}
 export default OrderList;
