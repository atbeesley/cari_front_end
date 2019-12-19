import React, {Component} from 'react'
import Request from '../../helpers/Request'

class CustomerCreateForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      wallet: 0,
      orders: [],
      restaurant: [],
      selectedOrder: "",
      selectedRestaurant: "http://localhost:8080/api/restaurants/1"
    }
    this.handleName = this.handleName.bind(this);
    this.handleWallet = this.handleWallet.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
    this.handleRestaurant = this.handleRestaurant.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    request.get('/api/orders').then((data) => {
      this.setState({orders: data._embedded.orders})
    });
    const request2 = new Request();
    request.get('/api/restaurants').then((data) => {
      this.setState({restaurant: data._embedded.restaurants})
    })
  }

  handleName(event){
    this.setState({name: event.target.value})
  }

  handleWallet(event){
    this.setState({wallet: event.target.value})
  }

  handleOrder(event){
    this.setState({selectedOrder: event.target.value})
  }

  handleRestaurant(event){
    this.setState({selectedRestaurant: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    const newCustomer = {
      name: this.state.name,
      wallet: this.state.wallet,
      orders: this.state.selectedOrder,
      restaurant: this.state.selectedRestaurant
    }
    this.props.onFormSubmit(newCustomer);
  }

  render(){

    if (!this.state.restaurant.length === 0){
      return <p> Loading...</p>
    }
    const restaurantOptions = this.state.restaurant.map((restaurant, index) => {
      return <option key={index}
      value={restaurant._links.self.href}>{restaurant.name}</option>
    })

    if (!this.state.orders.length === 0){
      return <p> Loading...</p>
    }
    const orderOptions = this.state.orders.map((order, index) => {
      return <option key={index}
      value={order._links.self.href}>{order.id}</option>
    })

    return(
      <form onSubmit={this.handleSubmit} className="customerForm">

      <input type="text" placeholder="Name" name="name" onChange={this.handleName} value={this.state.name} />

      <input type="double" placeholder="Customer's Wealth Level" name="wallet" onChange={this.handleWallet} value={this.state.handleWallet} />

      <select name="order" onChange={this.handleOrder}>{orderOptions}
      </select>

      <select name="restaurant" onChange={this.handleRestaurant}>{restaurantOptions}
      </select>

      <button type="submit">Save Customer</button>
      </form>
    )
  }
}

export default CustomerCreateForm
