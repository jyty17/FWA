import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// const ApolloApp = AppComponent => (
//   <ApolloProvider client={client}>
//     <AppComponent />
//   </ApolloProvider>
// );

// console.log("my client", client);

// ReactDOM.render(
//   <ApolloProvider client={client}>
//     <App />
//   </ApolloProvider>, document.getElementById('root'));


ReactDOM.render(( 
  <BrowserRouter>
    <App /> 
  </BrowserRouter>
  ), document.getElementById('root'));
