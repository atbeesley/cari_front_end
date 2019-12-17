import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import OrderList from '../components/orders/OrderList'
import Request from '../helpers/Request.js'
import OrderDetail from '../components/orders/OrderDetail'
import OrderCreateForm from '../components/orders/OrderCreateForm'

class OrderContainer extends Component {
constructor(props){
  super(props);
  this.state = {
    orders: []
  }
  this.handleFormSubmit = this.handleFormSubmit.bind(this);
}

componentDidMount(){
  const request = new Request();

  request.get('/orders')
  .then((data) => {
    this.setState({orders: data._embedded.orders})
  })
}

handleFormSubmit(submittedForm){
  console.log(submittedForm);
  submittedForm.id = Date.now();
  const updatedOrders = [...this.state.orders, submittedForm];
  console.log(updatedOrders);
  this.setState({
    orders: updatedOrders
  })
}

  render(){
    return(
      <Fragment>
        <OrderCreateForm onFormSubmit= {this.handleFormSubmit} />
        <OrderList orders={this.state.orders}/>
      </Fragment>
    )
  }

}

export default OrderContainer
