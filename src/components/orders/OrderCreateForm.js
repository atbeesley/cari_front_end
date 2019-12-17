import React, {Component, Fragment} from 'react'
import Request from '../../helpers/Request'


class OrderCreateForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      collectionTime: "",
      customer: "",
      dishes: [],
      collected: false
    }

this.handleCollectionTime = this.handleCollectionTime.bind(this);
this.handleCustomer = this.handleCustomer.bind(this);
this.handleDishes= this.handleDishes.bind(this);
this.handleCollected = this.handleCollected.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get('/orders').then((data) => {
      this.setState({orders: data._embedded.orders})
    })
  }
  
  handleSubmit(event){
    event.preventDefault();
    const collectionTime = this.state.collectionTime;
    const customer = this.state.customer;
    const dishes = this.state.dishes;
    const collected = this.state.collected;
    // const newOrder = {
    //   collectionTime: this.state.collectionTime,
    //   customer: this.state.customer,
    //   restaurant: this.state.restaurant,
    //   dishes: this.state.dishes,
    //   collected: this.state.collected
    // }
    this.props.onFormSubmit({
        collectionTime: collectionTime,
        customer: customer,
        dishes: dishes,
        collected: collected
    });
    this.setState({
      collectionTime: "",
      customer: "",
      dishes: [],
      collected: false
    });
  }

  handleCollectionTime(event){
    this.setState({collectionTime: event.target.value})
  }

  handleCustomer(event){
    this.setState({customer: event.target.value})
  }

  handleDishes(event){
    this.setState({dishes: event.target.value})
  }

  handleCollected(event){
    this.setState({collected: event.target.value})
  }


  findOrderById(id){
    return this.state.orders.find((order) => {
      return order.id === parseInt(id);
    });
  }

  handleDelete(id){
    const request = new Request();
    const url = '/orders/' + id;
    request.delete(url).then(() => {
      window.location = '/orders';
    });
  }

  handlePost(order){
    const request = new Request();
    request.post('/orders/', order).then(() => {
      window.location = '/orders'
    })
  }

  handleUpdate(order, id){
    const request = new Request();
    request.patch('/orders/' + id, order).then(() => {
      window.location = '/orders/' + id
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <input type="text" placeholder="Collection time" name="collectionTime"
      onChange={this.handleCollectionTime} value={this.state.collectionTime} />

      <input type="option" placeholder="Customer" name="customer"
      onChange={this.handleCustomer} value={this.state.customer} />

      <input type="option" placeholder="Dishes" name="dishes"
      onChange={this.handleDishes} value={this.state.dishes} />

      <input type="option" placeholder="Collected yet?" name="collected"
      onChange={this.handleCollected} value={this.state.collected} />

      <button type="submit" value="Post"

      >Save order</button>
      </form>
    )
  }

}

export default OrderCreateForm
