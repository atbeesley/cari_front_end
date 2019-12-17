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
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  componentDidMount(){
    const request = new Request();

    request.get('/customers')
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
    const url = '/customer/' + id;
    request.delete(url).then(() => {
      window.location = '/customers';
    });
  }
  //
  // handlePost(customer){
  //   const request = new Request();
  //   request.post('/customer' + id, customer).then(() => {
  //     window.location = '/customers/' + id
  //   })
  // }

  handleFormSubmit(submittedForm){
    console.log(submittedForm);
    submittedForm.id = Date.now();
    const updatedCustomers = [...this.state.customers, submittedForm];
    console.log(updatedCustomers);
    this.setState({
      customers: updatedCustomers
    })
  }

  render(){
    return(

      <Fragment>
      <CustomerCreateForm onFormSubmit= {this.handleFormSubmit} />
      <CustomerList customers={this.state.customers} />
      </Fragment>
    )
  }

}
export default CustomerContainer
