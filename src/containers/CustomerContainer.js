import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Customer from '../components/customer/Customer'
import CustomerCreateForm from '../components/customer/CustomerCreateForm'
import CustomerList from '../components/customer/CustomerList'
import Request from '../helpers/Request.js'

class CustomerContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      customers: []
    }
    this.findCustomerById = this.findCustomerById.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }
  componentDidMount(){
    const request = new Request();

    request.get('/api/customers')
    .then((data) => {
      this.setState({customers: data._embedded.customers})
    })
  }

  findCustomerById(id){
    return this.state.customers.find((customer) => {
      return customer.id === parseInt(id);
    });
  }

  handleDelete(id){
    const request = new Request();
    const url = '/api/customers' + id;
    request.delete(url).then(() => {
      window.location = '/customers';
    });
  }

  handlePost(customer){
    console.log(customer)
    const request = new Request();
    request.post('/api/customers', customer).then(() => {
      window.location = '/customers'
    })
  }


  render(){
    return(
      <Router>
      <Fragment>
      <Switch>
      <Route exact path = '/customers/new' render={() =>{
        return <CustomerCreateForm onFormSubmit= {this.handlePost}/>
      }}/>



      <Route render={(props) =>{
        return <CustomerList customers={this.state.customers}/>
      }}/>
      </Switch>
      </Fragment>
      </Router>
    )
  }

}
export default CustomerContainer
