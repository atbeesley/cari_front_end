import React, {Component} from 'react'
import Request from '../../helpers/Request'

class CustomerCreateForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      wallet: 0,
      orders: [],
      restaurant: null
    }
    this.handleName = this.handleName.bind(this);
    this.handleWallet = this.handleWallet.bind(this);
    this.handleOrders = this.handleOrders.bind(this);
    this.handleRestaurant = this.handleRestaurant.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    request.get('/api/customers').then((data) => {
      this.setState({customers: data._embedded.customers})
    })
  }

  handleName(event){
    this.setState({name: event.target.value})
  }

  handleWallet(event){
    this.setState({wallet: event.target.value})
  }

  handleOrders(event){
    this.setState({orders: event.target.value})
  }

  handleRestaurant(event){
    this.setState({restaurant: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    const newCustomer = {
      name: this.state.name,
      wallet: this.state.wallet,
      orders: this.state.orders,
      restaurant: event.target.restaurant
    }
    this.props.onFormSubmit(newCustomer);
  }


  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit}>

      <input type="text" placeholder="Name" name="name" onChange={this.handleName} value={this.state.name} />

      <input type="text" placeholder="Customer's Wealth Level" name="wallet" onChange={this.handleWallet} value={this.state.handleWallet} />

      <input type="number" placeholder="Order(s)! Order(s)!" name="order" onChange={this.handleOrder} value={this.state.order}/>
      <select name="customer">
      </select>

      <button type="submit">Save</button>
      </form>
      </div>
    )
  }
}

export default CustomerCreateForm
