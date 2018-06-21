import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ApolloProvider, graphql} from "react-apollo";
import ApolloClient, { createNetworkInterface } from 'apollo-boost';
import gql from 'apollo-boost';
import List from './components/List/List.js';
import { Query } from 'react-apollo';
// import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const networkInterface = new createNetworkInterface({
  uri: `http://localhost:5000/graphql`
})

const client = new ApolloClient({ // client is defaulting
  // uri: `http://localhost:5000/graphql`
  ssrMode: true,
  networkInterface,
})

console.log("my client? OMG", client);

class App extends Component {
  constructor() {
    super();
    this.state={
      name: '',
      email: ''
    };

    this.sendForm = this.sendForm.bind(this);
  }

  // Functions go here
  sendForm() {
    // send items to query 
    console.log(this.state.name, this.state.email)
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="layout">
          <div className="title">
            <h1>CCGN</h1>
          </div>
          <h2>Food Selection App</h2>
          <p className="prompt"> Please enter your name and phone number</p>
          <form onSubmit={this.sendForm} >
            <label>Name: <input type="text" value={this.state.value} onChange={(e) => this.setState({name: e.target.value})}/></label>
            <label>Phone: <input type="text" value={this.state.value} onChange={(e) => this.setState({email: e.target.value})}/></label>
            <input type="submit" value="Submit" />
          </form>
          <p className="prompt">Please select one of the following choices</p>
          <List />
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
          <div>
          </div>
        </div>
      </ApolloProvider>
    );
  }
}
export default App;