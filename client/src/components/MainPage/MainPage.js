import React, {Component} from 'react';
import './MainPage.css';
import Header from '../Header/Header.js';

class MainPage extends Component {

  constructor() {
    super();
    this.state={
      orders: [],
      food_one: 0,
      food_two: 0,
      food_three: 0,
      success: false,
    };

    this.success.bind(this);
  }

  handleSubmit(event) {
    // send items to query 
    // console.log(this.state.name, this.state.email)
    var that = this;
    event.preventDefault();
    let user_info = {
      name: this.refs.name.value,
      phone: this.refs.phone.value,
      id: Math.random().toFixed(3),
      food_one: this.state.food_one,
      food_two: this.state.food_two,
      food_three: this.state.food_three
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
      // window.location.reload();
      this.success();
      setTimeout(()=> window.location.reload, 2000)
  }

  success() {
    this.setState({
      success: !this.state.success,
    })
  }

  render() {
    return (
      <div className="layout">
        <Header />
        { this.state.success ? 
          <div className="success">
            <p>Thank you for your submission! Your order has been recorded. Refreshing...</p>
          </div>
          :
          <div></div>
        }
        <div className="content"><div className= "cover">
          <h2>Sunday Food Service</h2>
          <form onSubmit={this.handleSubmit.bind(this)} >
            <div className="userInfo">
              <p className="prompt"> Please enter your name and phone number</p>
              <label>Name: <input type="text" ref="name" placeholder="John Smith" /></label>
              <label>Phone: <input type="number" ref="phone" placeholder="347 123 4567" /></label>
            </div>
            <p className="prompt">Please select one of the following choices</p>
            <div className="list">
              <div className="container" >
                <h3>Beef</h3>
                <div className="selection">
                  <p>Quantity</p>
                  <div className="quantity-control">
                    <button type="button" onClick={()=> this.setState({ food_one: this.state.food_one > 0 ? this.state.food_one - 1 : this.state.food_one })}>-</button>
                    <input 
                      className="quantity" 
                      type="number" 
                      min="0" 
                      max="5" 
                      width="25px" 
                      height="30px"
                      value={this.state.food_one}
                      onChange={(e)=> this.setState({ food_one: e.target.value })}
                      ></input>
                      <button type="button" onClick={()=> this.setState({ food_one: this.state.food_one < 5 ? this.state.food_one + 1 : this.state.food_one })}>+</button>
                    </div>
                </div>
              </div>
              <div className="container">
                <h3>Chicken</h3>
                <div className="selection">
                  <p>Quantity</p>
                  <div className="quantity-control">
                    <button type="button" onClick={()=> this.setState({ food_two: this.state.food_two > 0 ? this.state.food_two - 1 : this.state.food_two })}>-</button>
                    <input 
                      className="quantity" 
                      type="number" 
                      min="0" 
                      max="5" 
                      width="20px" 
                      value={this.state.food_two}
                      onChange={(e)=> this.setState({ food_two: e.target.value })}
                      ></input>
                    <button type="button" onClick={()=> this.setState({ food_two: this.state.food_two < 5 ? this.state.food_two + 1 : this.state.food_two })}>+</button>
                  </div>
                </div>
              </div>
              <div className="container">
                <h3>Pork</h3>
                <div className="selection">
                  <p>Quantity</p>
                  <div className="quantity-control">
                    <button type="button" onClick={()=> this.setState({ food_three: this.state.food_three > 0 ? this.state.food_three - 1 : this.state.food_three })}>-</button>
                    <input 
                      className="quantity" 
                      type="number" 
                      min="0" 
                      max="5" 
                      width="20px" 
                      value={this.state.food_three}
                      onChange={(e)=> this.setState({ food_three: e.target.value })}
                      ></input>
                    <button type="button" onClick={()=> this.setState({ food_three: this.state.food_three < 5 ? this.state.food_three + 1 : this.state.food_three })}>+</button>
                  </div>
                </div>
              </div>
            </div>
            <button disabled={!(this.refs.name && this.refs.phone)} className="finalSubmit">Send</button>
          </form>
        </div>
        </div>
      </div>
    );
  }
}

export default MainPage;