const express = require('express');
var app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const schema = require('./schema.js');
const pg = require('pg');
var bodyParser = require('body-parser');

let pool = new pg.Pool({
  port: 5432,
  user: 'Jerry',
  password: '',
  database: 'storage',
  max: 10,
  host: 'localhost'
});

//allow cross origin requests
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

pool.connect((err, db, done) => {
  if(err) {
    console.log(err);
  } else {
    db.query('SELECT * FROM "Horizon"', function(err, table){
      if(err){
        console.log(err);
      } else {
        console.log(table.rows);
      }
      db.end();
    })
  }
})

app.get('/image/ccgn', (request, response) => {
  response.sendFile('client/src/ccgn.png' , { root : __dirname});
})
app.get('/image/food', (request, response) => {
  response.sendFile('client/src/fp1.jpg' , { root : __dirname});
})


app.get('/api/food', function(request, response) {
  pool.connect((err, db, done) => {
    if(err) {
      return response.status(400).send(err);
    } else {
      db.query('SELECT * FROM "Horizon"', function(err, table) {
        // done();
        if(err) {
          return response.status(400).send(err)
        } else {
          return response.status(200).send(table.rows)
        }
      })
    }
  });
})

app.post('/api/order-food', function(request, response) {
  var name = request.body.name;
  var phone = request.body.phone;
  var food_one = request.body.food_one;
  var food_two = request.body.food_two;
  var food_three = request.body.food_three;
  var id = request.body.id;
  pool.connect((err, db, done) => {
    if(err) {
      return response.status(400).send(err);
    } else {
      db.query('INSERT INTO "Horizon" (name, phone, food_one, food_two, food_three, id) VALUES($1, $2, $3, $4, $5, $6)',[name, phone, food_one, food_two, food_three, id] , (err, table) => {
        if(err) {
          console.log("Error before data is inserted", err);
          return response.status(400).send(err);
        } else {
          console.log('DATA INSERTED');
          db.end();
          response.status(201).send({message: 'Data inserted!'});
        }
      })
    }
  })
})

// var graphqlHTTP = require('express-graphql');
// var { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
// var { makeExecutableSchema } = require('graphql-tools');

// var schema = makeExecutableSchema({typeDefs, resolvers});
// app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
// app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));
// app.use('/graphql', graphqlHTTP({
//   schema,
//   graphiql: true
// }));

app.listen(port, () => console.log(`Listening on port ${port}`));

