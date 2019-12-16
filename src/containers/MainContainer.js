import React, {Fragment} from 'react'
import NavBar from '../NavBar.js'
import Request from '../helpers/Request';
import OrderCreateForm from '../components/orders/OrderCreateForm'
import RestaurantContainer from './RestaurantContainer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

class MainContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      restaurant: []
    }
  }

  componentDidMount(){
  const request = new Request();

  request.get('/restaurants')
  .then((data) => {
    this.setState({restaurants: data._embedded.restaurants})
  })
}

render(){
  return (
    <Router>
    <Fragment>
      <NavBar />
      <Switch>
      <Route path="/restaurants" component={RestaurantContainer}/>
      </Switch>
      </Fragment>
      </Router>
  )
}
}

export default MainContainer;
