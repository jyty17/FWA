const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
// --------------------------------------------------------------------

// var graphqlHTTP = require('express-graphql');
// var { buildSchema } = require('graphql');

// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

// var root = { hello: () => 'Hello world!' };

// // var app = express();
// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true,
// }));
// app.listen(port, () => console.log(`Now browse to localhost:${port}/graphql`));

// ----------------------------------------------------------------------
var bodyParser = require('body-parser');
var { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
var { makeExecutableSchema } = require('graphql-tools');

var typeDefs = [`
type Query {
  hello: String
  user(name: String, email: String): User
  food(name: String, amount: Int, show: Boolean): Food
}
type User {
  name: String
  email: String
}
type Food {
  name: String
  amount: Int
  show: Boolean
}

schema {
  query: Query
}`];

var resolvers = {
  Query: {
    hello(root) {
      return 'world';
    }
  }
  // User: {
  //   name(root) {
  //     return 'John';
  //   }
  // }
};

var schema = makeExecutableSchema({typeDefs, resolvers});
app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));
// app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'));

app.listen(port, () => console.log(`Listening on port ${port}`));

