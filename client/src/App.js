import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import List from './components/List/List.js';
// import InfoForm from './components/InfoForm/InfoForm.js';

class App extends Component {
  constructor() {
    super();
    this.state={
      orders: [],
      food_one: 0,
      food_two: 0
    };
  }

  // Functions go here
  sendForm(event) {
    // send items to query 
    // console.log(this.state.name, this.state.email)
    var that = this;
    event.preventDefault();
    let user_info = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      id: Math.random().toFixed(3),
      food_one: this.state.food_one,
      food_two: this.state.food_two
    };
    var request = new Request('http://localhost:5000/api/order-food', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json'}),
      body: JSON.stringify(user_info)
    });
    //xml httprequest
    let orders = that.state.orders;
    orders.push(user_info);
    that.setState({
      orders: orders
    });
    console.log(user_info);
    fetch(request)
      .then(function(response) {
        response.json()
          .then(function(data) {
            // let countries = that.state.countries;
            // countries.push(country_data);
            // that.setState({
            //   countries: countries
            // })
          })
      })
      .catch(function(err) {
        console.log(err);
      })
      window.location.reload();
  }
  render() {
    return (
      <div className="layout">
        <div className="title">
          <img src="http://localhost:5000/image/ccgn" />
          <h1>CCGN</h1>
        </div>
        <h2>Food Selection App</h2>
        <p className="prompt"> Please enter your name and email number</p>
        <form onSubmit={this.sendForm.bind(this)} >
          <label>Name: <input type="text" ref="name" /></label>
          <label>Email: <input type="text" ref="email" /></label>
           <p className="prompt">Please select one of the following choices</p>
          <div className="list">
            <label className="container" >
              <h3>Beef</h3>
              <div className="selection">
                <p>Quantity</p>
                <input className="quantity" type="number" min="0" max="10" width="20px" onChange={(e)=> this.setState({ food_one: e.target.value })}></input>
              </div>
            </label>
            <label className="container">
              <h3>Chicken</h3>
              <div className="selection">
                <p>Quantity</p>
                <input className="quantity" type="number" min="0" max="10" width="20px" onChange={(e)=> this.setState({ food_two: e.target.value})}></input>
              </div>
            </label>
            <label className="container">
              <h3>Pork</h3>
              <div className="selection">
                <p>Quantity</p>
                <input className="quantity" type="number" min="0" max="10" width="20px" onChange={(e)=> this.setState({ food_two: e.target.value})}></input>
              </div>
            </label>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default App;