import React from 'react';
import './List.css';
import gql from 'apollo-boost';
import graphql from 'react-apollo';

const getItemsQuery = gql`
{
  foods {
    name
    amount
    available 
  }
}
`;

class List extends React.Component {
  displayItems() {
    var data = this.props.data;
    if(data.loading) {
      return 
    } else {
      return data.foods.map(food )
    }
  }

  render() {
    return(
      <p className="prompt">Please select one of the following choices</p>
        <div className="list">
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
        </div>
    );
  }
}

export default graphql(getItemsQuery)(List);