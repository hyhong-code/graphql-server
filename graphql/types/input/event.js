const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
} = require("graphql");

module.exports = new GraphQLInputObjectType({
  name: "EventInput",
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    date: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});
