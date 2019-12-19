import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Request from '../helpers/Request.js'

class AdminContainer extends Component{
  render(){
    return(

      <div className="admin">
      <h1>Welcome To Cari House</h1>
      <h4>Choose an Option From the NavBar Above</h4>
      </div>
    )
  }
}
export default AdminContainer
