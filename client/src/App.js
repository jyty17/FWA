import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import List from './components/List/List.js';
// import InfoForm from './components/InfoForm/InfoForm.js';

class App extends Component {
  constructor() {
    super();
    this.state={
      orders: []
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
      food_one: this.refs.one ? this.refs.one : 0 ,
      food_two: this.refs.two ? this.refs.two : 0
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
  }
  render() {
    return (
      <div className="layout">
        <div className="title">
          <h1>CCGN</h1>
        </div>
        <h2>Food Selection App</h2>
        <p className="prompt"> Please enter your name and email number</p>
        <form onSubmit={this.sendForm.bind(this)} >
          <label>Name: <input type="text" ref="name" /></label>
          <label>email: <input type="text" ref="email" /></label>
          <input type="submit" value="Submit" />
           <p className="prompt">Please select one of the following choices</p>
          <div className="list">
            <label className="container" >
              <h3>Beef</h3>
              <div className="selection">
                Quantity
                {/*<p>Quantity</p>*/}
                {/*<button>-</button>*/}
                <input className="quantity" type="number" min="1" max="10" width="20px" refs="one"></input>
                {/*<button>+</button>*/}
              </div>
            </label>
            <label className="container">
              <h3>Chicken</h3>
              <div className="selection">
                Quantity
                {/*<p>Quantity</p>*/}
                {/*<button>-</button>*/}
                <input className="quantity" type="number" min="1" max="10" width="20px" refs="two"></input>
                {/*<button>+</button>*/}
              </div>
            </label>
            <label className="container">Pork
              <input type="radio" name="radio"></input>
              <span className="checkmark"></span>
            </label>
          </div>
        </form>
      </div>
    );
  }
}
export default App;