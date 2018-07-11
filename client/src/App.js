import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import MainPage from './components/MainPage/MainPage.js';
// import List from './components/List/List.js';
import AdminPage from './components/AdminPage/AdminPage.js';
import EditPage from './components/EditPage/EditPage.js'
import { Route, Switch } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state={
      orders: [],
      food_one: 0,
      food_two: 0,
      food_three: 0
    };
  }
  
  preSend(e) {
    e.preventDefault();
    console.log(this.state.orders, this.state.food_one, this.state.food_two, this.state.food_three);
  }

  render() {
    const test = () => <div>Hello</div>;
    return (
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route path="/user/edit" component={EditPage}/>
        <Route exact path="/sov-user/admin" component={AdminPage}/>
      </Switch>
    );
  }
}
export default App;