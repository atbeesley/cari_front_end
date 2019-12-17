import React, {Fragment} from 'react'
import NavBar from '../NavBar.js'
import Request from '../helpers/Request';
import OrderCreateForm from '../components/orders/OrderCreateForm'
import RestaurantContainer from './RestaurantContainer'
import OrderContainer from './OrderContainer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

class MainContainer extends React.Component {


render(){
  return (
    <Router>
    <Fragment>
      <NavBar />
      <Switch>
      <Route path="/orders" component={OrderContainer}/>
      <Route path="/restaurants" component={RestaurantContainer}/>
      </Switch>
      </Fragment>
      </Router>
  )
}
}

export default MainContainer;
