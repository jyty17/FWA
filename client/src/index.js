import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider, graphql } from 'react-apollo';
import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';


const client = new ApolloClient({
  // link: ApolloLink.from([
  //   onError(({ graphQLErrors, networkError }) => {
  //     if (graphQLErrors)
  //       graphQLErrors.map(({ message, locations, path }) =>
  //         console.log(
  //           `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
  //         ),
  //       );
  //     if (networkError) console.log(`[Network error]: ${networkError}`);
  //   }),
  //   new HttpLink({
  //     uri: 'http://localhost:5000/graphql',
  //     credentials: 'same-origin'
  //   })
  // ]),
  // cache: new InMemoryCache()
  // link: new HttpLink({ uri: 'https://localhost:5000/graphql' }),
  // cache: new InMemoryCache()
  // link: new HttpLink({uri: 'https://localhost/graphql'}),
  link: new HttpLink({uri: 'https://fakerql.com/graphql'}),
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));

// const ApolloApp = AppComponent => (
//   <ApolloProvider client={client}>
//     <AppComponent />
//   </ApolloProvider>
// );

console.log("my client", client);

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('root'));

registerServiceWorker();
