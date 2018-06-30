import React, {Component} from 'react';
import './AdminPage.css';
import Header from '../Header/Header.js';

class AdminPage extends Component {
  constructor() {
    super(); 
    this.state= {
      food_one: 0,
      food_two: 0,
      food_three: 0,
      entries: [],
      entriesTotal: 0
    }
  }

  componentDidMount() {
    console.log("Component Mounted");
    var that = this;
    fetch('http://localhost:5000/api/food')
      .then(function(response) {
        // console.log("Error about to occur");
        response.json()
          .then(function(data) {
            that.setState({ entries: data});
            console.log(data)
          })
      })
      .catch(function(err) {
        console.log(err);
      })
  }

  calculateTotal(arr) {
    var i;
    let temp = [0, 0, 0];
    for (i=0; i<arr.length; i++) {
      temp[0] += arr[i].food_one;
      temp[1] += arr[i].food_two;
      temp[2] += arr[i].food_three;
    }
    return temp;
  }

	render() {
    let orders = this.state.entries;
    console.log(orders.length);
    var optionOne=0, optionTwo=0, optionThree=0;
    // { orders.map(order => <li key={order.id}>{order.name} {order.phone} {order.food_one} {order.food_two} {order.food_three} </li>)}
		return(
      <div>
        <Header />
        <div className="admin-content">
          <h1> Hello </h1>
          <p> Total </p>
          { 
            orders.map(order=> {
              optionOne+=order.food_one;
              optionTwo+=order.food_two;
              optionThree+=order.food_three;
            })
          }
          <div className="total-section">
            <p>Food Choice One: <span> { optionOne }</span></p>
            <p>Food Choice Two: <span>{ optionTwo }</span></p>
            <p>Food Choice Three: <span>{ optionThree }</span></p>
          </div>
        </div>
      </div>
      );
	}
}

export default AdminPage;


