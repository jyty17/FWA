const graphql = require('graphql');
const _ = require('lodash');

const { 
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLSchema 
} = graphql;

//dummy data
var persons = [
  {name: 'John', email: 'john@mail.com', id: '1'},
  {name: 'Jim', email: 'jim@mail.com', id: '2'},
  {name: 'Jared', email: 'jared@mail.com', id: '3'}
];

var foods = [
  {name: 'Beef', amount: 3, available: true, id: '11'},
  {name: 'Chicken', amount: 6, available: true, id: '12'},
  {name: 'Pork', amount: 2, available: true, id: '13'},
];

const PersonType = new GraphQLObjectType({
	name: 'Person',
	fields: () => ({
		id: {type: GraphQLString},
    name: {type: GraphQLString},
    email: {type: GraphQLString}
	})
});

const FoodType = new GraphQLObjectType({
  name: 'Food',
  fields: () => ({
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    amount: {type: GraphQLInt},
    available: {type: GraphQLBoolean}
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    person: {
      type: PersonType,
      args: {id: {type: GraphQLString}},
      resolve(parent, args){
        // code to get data from postgres db
        return _.find(persons, {id: args.id});
      }
    }
    // food: {
    //   type: FoodType,
    //   args: {id: {type: GraphQLString}},
    //   resolve(parent, args) {
    //     return _.find(foods, {id: args.id});
    //   }
    // }
  }
});

// person(id: 2) {
//   name
//   email
// };

module.exports = new GraphQLSchema({
  query: RootQuery
});