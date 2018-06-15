import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloClient, InMemoryCache } from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';

const client = new ApolloClient({ 
  link: new HttpLink({uri: "http://192.168.1.179:3000/graphql"}),
  cache: new InMemoryCache()

});

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
