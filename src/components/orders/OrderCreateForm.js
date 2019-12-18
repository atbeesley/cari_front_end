import React, {Component} from 'react'
import Request from '../../helpers/Request'


class OrderCreateForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      restaurant: [],
      price: 0,
      collectionTime: "",
      customer: [],
      dish: []

    }

    this.handlePrice = this.handlePrice.bind(this);
    this.handleCollectionTime = this.handleCollectionTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get('/api/restaurants').then((data) => {
      this.setState({restaurant: data._embedded.restaurants})
    })
    const request2 = new Request();
    request.get('/api/customers').then((data) => {
      this.setState({customer: data._embedded.customers})
    })
    const request3 = new Request();
    request.get('/api/dishes').then((data) => {
      this.setState({dish: data._embedded.dishes})
    })
  }

  handlePrice(event){
    this.setState({price: event.target.value})
  }

  handleCollectionTime(event){
    this.setState({collectionTime: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    const newOrder={
      restaurant: this.state.restaurant.value,
      price: this.state.price,
      collectionTime: this.state.collectionTime,
      customer: this.state.customer.value,
      dish: this.state.dish.value
    }
    this.props.onFormSubmit(newOrder);
  }

  render(){

    if (!this.state.restaurant.length === 0){
      return <p> Loading...</p>
    }
    const restaurantOptions = this.state.restaurant.map((restaurant, index) => {
      return <option key={index}
      value={restaurant._links.self.href}>{restaurant.name}</option>
    })


    if (!this.state.customer.length === 0){
      return <p> Loading...</p>
    }
    const customerOptions = this.state.customer.map((customer, index) => {
      return <option key={index}
      value={customer._links.self.href}>{customer.name}</option>
    })


    if (!this.state.dish.length === 0){
      return <p> Loading...</p>
    }
    const dishOptions = this.state.dish.map((dish, index) => {
      return <option key={index}
      value={dish._links.self.href}>{dish.name}</option>
    })

    return(
      <form onSubmit={this.handleSubmit}>

      <select name="restaurant">{restaurantOptions}</select>

      <input type="option" placeholder="Price" name="price"
      onChange={this.handlePrice} value={this.state.price} />

      <input type="option" placeholder="Collection Time" name="collectionTime"
      onChange={this.handleCollectionTime} value={this.state.collectionTime} />

      <select name="customer">{customerOptions}</select>

      <select name="dish">{dishOptions}</select>


      <button type="submit">Save Order</button>
      </form>
    )
  }

}

export default OrderCreateForm
