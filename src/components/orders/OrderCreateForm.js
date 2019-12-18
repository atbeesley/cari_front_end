import React, {Component} from 'react'
import Request from '../../helpers/Request'


class OrderCreateForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      id: 0,
      price: 0
    }

    this.handleName = this.handleName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get('/api/orders').then((data) => {
      this.setState({orders: data._embedded.orders})
    })
  }

  handleName(event){
    this.setState({name: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    const newOrder={
      name: this.state.name
    }
    this.props.onFormSubmit(newOrder);
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>

      <input type="option" placeholder="Name" name="name"
      onChange={this.handleName} value={this.state.name} />


      <button type="submit">Save Order</button>
      </form>
    )
  }

}

export default OrderCreateForm
