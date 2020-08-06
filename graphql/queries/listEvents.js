const { GraphQLList, GraphQLNonNull } = require("graphql");

const Event = require("../../model/Event");
const getProjections = require("../../utils/getProjections");
const EventType = require("../types/event");

module.exports = {
  type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(EventType))),
  resolve: async (root, args, _, fieldASTs) => {
    try {
      const events = await Event.find({}).select(getProjections(fieldASTs));
      return events;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
