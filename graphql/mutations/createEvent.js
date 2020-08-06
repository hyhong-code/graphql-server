const { GraphQLNonNull } = require("graphql");

const EventType = require("../types/event");
const Event = require("../../model/Event");
const EventInputType = require("../types/input/event");

module.exports = {
  type: new GraphQLNonNull(EventType),
  args: {
    input: {
      name: "input",
      type: new GraphQLNonNull(EventInputType),
    },
  },
  resolve: async (root, { input }) => {
    try {
      const event = Event.create(input);
      return event;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
