const { GraphQLSchema, GraphQLObjectType } = require("graphql");

const queries = require("./queries");
const mutations = require("./mutations");
const subscriptions = require("./subscriptions");

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQuery",
    fields: queries,
  }),
  mutation: new GraphQLObjectType({
    name: "RootMutation",
    fields: mutations,
  }),
  subscription: new GraphQLObjectType({
    name: "RootSubscription",
    fields: subscriptions,
  }),
});
