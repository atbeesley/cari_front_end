import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/Request.js'
import DishList from '../components/dishes/DishList';

class DishContainer extends Component{

  constructor(props)
  {
    super(props);
    this.state = {
      dishes: []
    }

    this.findDishById = this.findDishById.bind(this);
    this.handlePost = this.handlePost.bind(this);

  }

  componentDidMount(){
    const request = new Request();

    request.get('/api/dishes')
    .then((data) => {
      this.setState({dishes: data._embedded.dishes})
    })
  }

  findDishById(id){
    return this.state.dishes.find((dish) => {
      return dish.id === parseInt(id);
    });
  }


  handlePost(dish){
    const request = new Request();
    request.post('/api/dishes', dish).then(() => {
      window.location = '/dishes'
    })
  }

  render(){
    return(
      <Router>
      <Fragment>
      <Switch>

      <Route render={(props) =>{
        return <DishList dishes={this.state.dishes}/>
      }}/>
      </Switch>
      </Fragment>
      </Router>
    )
  }
}
export default DishContainer
