const express = require('express');
var app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const schema = require('./schema.js');

//allow cross origin requests
app.use(cors());

app.get('/', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

var graphqlHTTP = require('express-graphql');

var bodyParser = require('body-parser');
var { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
// var { makeExecutableSchema } = require('graphql-tools');

// var schema = makeExecutableSchema({typeDefs, resolvers});
// app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
// app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(port, () => console.log(`Listening on port ${port}`));

