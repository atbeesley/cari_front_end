import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/Request';
import RestaurantList from '../components/restaurant/RestaurantList'


class RestaurantContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      restaurant: []
    }

  }
  componentDidMount(){
    const request = new Request();
    request.get('/api/restaurants')
    .then((data) => {
      this.setState({restaurant: data._embedded.restaurants})
    })
  }

  render(){
    return(
      <Router>
      <Fragment>
      <Switch>
      <Route render={(props) =>{
        return <RestaurantList restaurant={this.state.restaurant}/>
      }}/>
      </Switch>
      </Fragment>
      </Router>
    )
  }

}
export default RestaurantContainer;
