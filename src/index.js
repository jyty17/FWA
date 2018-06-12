import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
// import gql from "graphql-tag";
// import express from 'express';

// const GRAPHQL_PORT = 3000;

// const graphQLServer = express();

// graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
// graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// graphQLServer.listen(GRAPHQL_PORT, () =>
//   console.log(
//     `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
//   )
// );

const client = new ApolloClient({ uri: "http://localhost:3000/graphql" });

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

const ApolloApp = AppComponent => (
  <ApolloProvider client={client}>
    <AppComponent />
  </ApolloProvider>
);

console.log("my client", client);

ReactDOM.render(ApolloApp(App), document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
