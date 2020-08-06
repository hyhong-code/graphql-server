require("dotenv").config({ path: "./config/config.env" });
require("./config/db")();
const express = require("express");
const { createServer } = require("http");
const { graphqlExpress, graphiqlExpress } = require("graphql-server-express");
const { SubscriptionServer } = require("subscriptions-transport-ws");
const { subscribe, execute } = require("graphql");

const schema = require("./graphql/schema");

const app = express();
app.use(express.json());
app.use(
  "/graphql",
  graphqlExpress({
    schema,
  })
);

const port = process.env.PORT || 5000;

app.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql",
    subscriptionsEndpoint: `ws://localhost:${port}/subscriptions`,
  })
);

const server = createServer(app);

server.listen(port, (err) => {
  if (err) throw err;

  new SubscriptionServer(
    {
      schema,
      execute,
      subscribe,
      onConnect: () => console.log("Client connected"),
    },
    {
      server,
      path: "/subscriptions",
    }
  );

  console.log(`> Ready on PORT ${port}`);
});
