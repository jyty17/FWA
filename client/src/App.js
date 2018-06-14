import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ApolloProvider} from "react-apollo"
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

// const GET_CHOICES = gql`
//   query {
//     movie(id: 1) {
//       id
//       title
//     }
//   }
// `

class App extends Component {
  state={
    name: '',
    phone: '',
    response: ''
  };
  // server setups
  // state = {
  //   response: ''
  // };
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  // Functions go here
  sendForm() {
    // send items to query 
  }
  render() {
    return (
      <ApolloProvider>
      {this.state.response}
        <div className="layout">
          <div className="title">
            <h1>CCGN</h1>
          </div>
          <h2>Food Selection App</h2>
          <p className="prompt"> Please enter your name and phone number</p>
          <form onSubmit={this.sendForm} >
            <label>Name: <input type="text" value={this.state.value} onChange={(e) => this.setState({name: e.target.value})}/></label>
            <label>Phone: <input type="text" value={this.state.value} onChange={(e) => this.setState({phone: e.target.value})}/></label>
            <input type="submit" value="Submit" />
          </form>
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
        </div>
      </ApolloProvider>
    );
  }
}
export default App;