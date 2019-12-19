import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Request from '../helpers/Request.js'
import OrderList from '../components/orders/OrderList'
import OrderCreateForm from '../components/orders/OrderCreateForm'

class OrderContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      orders: []
    }
    this.findOrderById = this.findOrderById.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  componentDidMount(){
    const request = new Request();

    request.get('/api/orders')
    .then((data) => {
      this.setState({orders: data._embedded.orders})
    })
  }

  findOrderById(id){
    return this.state.orders.find((order) => {
      return order.id === parseInt(id);
    });
  }

  handleDelete(id){
    const request = new Request();
    const url = '/api/orders' + id;
    request.delete(url).then(() => {
      window.location = '/orders';
    })
  }

  handlePost(order){
    const request = new Request();
    request.post('/api/orders', order).then(() => {
      window.location = '/orders'
    })
  }

  handleUpdate(order, id){
    const request = new Request();
    request.patch('/api/orders/' + id, order).then(() => {
      window.location = '/orders/' + id
    })
  }

  render(){
    return(
      <Router>
      <Fragment>
      <Switch>

      <Route exact path = '/orders/new' render={() =>{
        return <OrderCreateForm onFormSubmit= {this.handlePost} />
      }}/>

      <Route render={(props) => {
        return <OrderList orders={this.state.orders}/>
      }}/>
      </Switch>
      </Fragment>
      </Router>
    )
  }

}

export default OrderContainer
