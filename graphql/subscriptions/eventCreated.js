const { GraphQLNonNull } = require("graphql");

const socket = require("../../utils/socket");
const EventType = require("../types/event");

module.exports = {
  type: new GraphQLNonNull(EventType),
  subscribe: () => socket.asyncIterator("EVENT_CREATED"),
};
