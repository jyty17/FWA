import React from 'react';
import './List.css';
import List from '../List/List.js';

class List extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      foods: []
      title: 'Food List'
    }
  }
  componentDidMount() {
    console.log("Component has mounted");
  }
  
  displayItems() {
    let foods = this.state.foods;
    if(data.loading) {
      return <div> Loading.... </div>;
    } else {
      return foods.map( food => {
          <li key={food.id}> {food.name} </li>
      });
    }
  }

  render() {
    return(
      <div>
        <p className="prompt">Please select one of the following choices</p>
        {this.displayItems() }
        {/*  <div className="list">
            <label className="container">One
              <input type="radio" name="radio"></input>
              <span className="checkmark"></span>
            </label>
            <label className="container">Two
              <input type="radio" name="radio"></input>
              <span className="checkmark"></span>
            </label>
            <label className="container">Three
              <input type="radio" name="radio"></input>
              <span className="checkmark"></span>
            </label>
          </div>*/}
      </div>
    );
  }
}

export default List;