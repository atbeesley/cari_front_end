import React, {Fragment} from 'react'
import NavBar from '../NavBar.js'
import Request from '../helpers/Request';
import RestaurantContainer from './RestaurantContainer'
import OrderContainer from './OrderContainer'
import CustomerContainer from './CustomerContainer'
import DishContainer from './DishContainer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

class MainContainer extends React.Component {


render(){
  return (
    <Router>
    <Fragment>
      <NavBar />
      <Switch>
      <Route path="/orders" component={OrderContainer}/>
      <Route path="/customers" component={CustomerContainer}/>
      <Route path="/restaurants" component={RestaurantContainer}/>
      <Route path="/dishes" component={DishContainer}/>
      </Switch>
      </Fragment>
      </Router>
  )
}
}

export default MainContainer;
