import React from 'react';
// import './List.css';

class List extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      foods: [],
      title: 'Food List'
    }
  }
  componentDidMount() {
    console.log("Component has mounted");
  }

  render() {
    return(
      <div>
        <p>List Component</p>
      </div>
    );
  }
}

export default List;