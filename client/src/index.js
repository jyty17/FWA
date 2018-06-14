import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';

// var express = require('express');
// var bodyParser = require('body-parser');
// var { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
// var { makeExecutableSchema } = require('graphql-tools');

// var typeDefs = [`
// type Query {
//   hello: String
// }

// schema {
//   query: Query
// }`];

// var resolvers = {
//   Query: {
//     hello(root) {
//       return 'world';
//     }
//   }
// };

// var schema = makeExecutableSchema({typeDefs, resolvers});
// var app = express();
// app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
// app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));
// app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'));

const client = new ApolloClient({ uri: "http://localhost:4000/graphql" });

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
