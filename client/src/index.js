import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { ApolloProvider, graphql } from 'react-apollo';
// import gql from 'graphql-tag';
// import ApolloClient from 'apollo-boost';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { HttpLink } from 'apollo-link-http';


// const client = new ApolloClient({ 
//   uri: 'http://localhost:5000/graphql';
//   // link: new HttpLink({uri: 'http://localhost:5000/graphql'}),
//   // cache: new InMemoryCache()
// });

// client
//   .query({
//     query: gql`
//       {
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

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
ReactDOM.render( <App /> , document.getElementById('root'));

registerServiceWorker();
