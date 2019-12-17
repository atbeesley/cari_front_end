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
}

componentDidMount(){
  const request = new Request();

  request.get('/orders')
  .then((data) => {
    this.setState({orders: data._embedded.orders})
  })
}

  render(){
    return(
      <Router>
      <Fragment>
      <Switch>
      <Route render{(props)}
      </Switch>
      </Fragment>
      </Router>
    )
  }

}

export default OrderContainer
