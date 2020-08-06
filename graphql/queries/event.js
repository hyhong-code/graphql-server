const { GraphQLID, GraphQLNonNull } = require("graphql");

const EventType = require("../types/event");
const Event = require("../../model/Event");
const getProjections = require("../../utils/getProjections");

module.exports = {
  type: new GraphQLNonNull(EventType),
  args: {
    id: {
      name: "id",
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (root, { id }, _, fieldASTs) => {
    try {
      const event = await Event.findById(id).select(getProjections(fieldASTs));
      return event;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};
