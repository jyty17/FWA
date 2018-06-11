import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
import { ApolloProvider} from "react-apollo"

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        }
      }
    }
  })
});

var query = '{ hello }';

graphql(schema, query).then(result => {

  // Prints
  // {
  //   data: { hello: "world" }
  // }
  console.log(result);

});

class App extends Component {
  constructor() {
    super();
    this.state={
      name: '',
      phone: ''
    }
  }
  // Functions go here
  sendForm() {
    // send items to query 
  }
  render() {
    return (
      <ApolloProvider>
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