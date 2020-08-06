const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
} = require("graphql");

module.exports = new GraphQLObjectType({
  name: "Event",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: GraphQLString,
    },
    date: {
      type: GraphQLString,
    },
  }),
});
