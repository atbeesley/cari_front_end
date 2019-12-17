import React from 'react';
import Customer from './Customer.js';


const CustomerList = (props) => {
	if (props.customers.length === 0){
	  return (<p>Loading...</p>)
	}

	const customers = props.customers.map((customer, index) => {
	  return (
	    <li key={index} className="component-item">
	    <div className="component">
	    <Customer customer={customer} />
	    </div>
	    </li>
	  )
	})

	return (
	  <ul className="component-list">
    {customers}
	  </ul>
	)
}

export default CustomerList;
