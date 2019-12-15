import React, {Component} from 'react'


class OrderCreateForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      userName: "",
      emailAddress: "",
      riceLevel: "",
      riceType: "",
      spiceLevel: "",
      ingredient: [],
      topping: []
    }
// remember to do the binding yo
  }
  componentDidMount(){
    const request = new Request();

    request.get('/orders')
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
      // add router stuffs here
    )
  }

}

export default OrderCreateForm
