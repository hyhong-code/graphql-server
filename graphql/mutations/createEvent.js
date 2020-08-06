const { GraphQLNonNull } = require("graphql");

const EventType = require("../types/event");
const Event = require("../../model/Event");
const EventInputType = require("../types/input/event");
const socket = require("../../utils/socket");

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
      socket.publish("EVENT_CREATED", {
        eventCreated: event,
      });
      return event;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
