import React, {Component} from 'react'


class OrderCreateForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      customerName: "",
      userName: "",
      emailAddress: "",
      riceLevel: "",
      riceType: "",
      spiceLevel: "",
      ingredient: [],
      topping: []
    }

// commented this binding out for now:

// this.handleCustomerName = this.handleCustomerName.bind(this);
// this.handleUserName = this.handleUserName.bind(this);
// this.handleEmailAddress = this.handleEmailAddress.bind(this);
// this.handleRiceLevel = this.handleRiceLevel.bind(this);
// this.handleRiceType = this.handleRiceType.bind(this);
// this.handleSpiceLevel = this.handleSpiceLevel.bind(this);

this.handleCustomerName = this.handleCustomerName.bind(this);
this.handleUserName = this.handleUserName.bind(this);
this.handleEmailAddress = this.handleEmailAddress.bind(this);
this.handleRiceLevel = this.handleRiceLevel.bind(this);
this.handleRiceType = this.handleRiceType.bind(this);
this.handleSpiceLevel = this.handleSpiceLevel.bind(this);
this.handleIngredient = this.handleIngredient.bind(this);
this.handleTopping = this.handleTopping.bind(this);
  }

  // componentDidMount(){
  //   const request = new Request();
  //   request.get('/orders').then((data) => {
  //     this.setState({orders: data._embedded.orders})
  //   })
  // }

  handleCustomerName(event){
    this.setState({customerName: event.target.value})
  }

  handleUserName(event){
    this.setState({userName: event.target.value})
  }

  handleEmailAddress(event){
    this.setState({emailAddress: event.target.value})
  }

  handleRiceLevel(event){
    this.setState({riceLevel: event.target.value})
  }

  handleRiceType(event){
    this.setState({riceType: event.target.value})
  }

  handleSpiceLevel(event){
    this.setState({spiceLevel: event.target.value})
  }

  handleSpiceLevel(event){
    this.setState({spiceLevel: event.target.value})
  }

  handleIngredient(event){
    this.setState({ingredient: event.target.value})
  }

  handleTopping(event){
    this.setState({topping: event.target.value})
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

  handleSubmit(event){
    event.preventDefault();
    const newOrder = {
      customerName: this.state.customerName,
      userName: this.state.userName,
      emailAddress: this.state.emailAddress,
      riceLevel: this.state.riceLevel,
      riceType: this.state.riceType,
      spiceLevel: this.state.spiceLevel,
      ingredient: this.state.ingredient,
      topping: this.state.topping
    }
    this.props.onFormSubmit(newOrder);
  }

  render(){
    return(
      <div>
      <form>
      <input type="text" placeholder="Customer name" name="customerName"
      onChange={this.handleCustomerName} value={this.state.customerName} />

      <input type="text" placeholder="Username" name="userName"
      onChange={this.handleUserName} value={this.state.userName} />

      <input type="text" placeholder="Email" name="emailAddress"
      onChange={this.handleEmailAddress} value={this.state.emailAddress} />

      <input type="text" placeholder="Spice level" name="spiceLevel"
      onChange={this.handleSpiceLevel} value={this.state.spiceLevel} />

      <input type="text" placeholder="Rice level" name="riceLevel"
      onChange={this.handleRiceLevel} value={this.state.riceLevel} />

      <input type="text" placeholder="Rice type" name="riceType"
      onChange={this.handleRiceType} value={this.state.riceType} />

      <button type="submit">Save order</button>
      </form>
      </div>
    )
  }

}

export default OrderCreateForm
