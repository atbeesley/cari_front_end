import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import OrderList from '../components/orders/OrderList';
import Request from '../helpers/Request';
import OrderDetail from '../components/orders/OrderDetail';
import OrderCreateForm from '../components/orders/OrderCreateForm';
// import OrderEditForm from '../../components/orders/OrderEditForm';

class RestaurantContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      restaurant: []
    }
      // this.findRestaurantById = this.findRestaurantById.bind(this);
      // this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount(){
    const request = new Request();
    request.get('/restaurants')
    .then((data) => {
      this.setState({restaurants: data._embedded.restaurants})
    })
  }
  // findRestaurantById(id){
  //   return this.state.restaurants.find((restaurant) => {
  //     return restaurant.id === parseInt(id);
  //   });
  // }
  // handleDelete(id){
  //   const request = new Request();
  //   const url = '/restaurants/' + id;
  //   request.delete(url).then(() => {
  //     window.location = '/restaurants';
  //   });
  // }
  // handlePost(order){
  //   const request = new Request();
  //   request.post('/restaurants', restaurant).then(() => {
  //     window.location = '/restaurants'
  //   })
  // }
  // handleUpdate(order, id){
  //   const request = new Request();
  //   request.patch('/restaurants/' + id, restaurant).then(() => {
  //     window.location = '/restaurants/' + id
  //   })
  // }
  render(){
    return(
      <h1>{this.state.restaurants}</h1>
    )
  }
}
export default RestaurantContainer;
