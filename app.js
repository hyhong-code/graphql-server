require("dotenv").config({ path: "./config/config.env" });
require("./config/db")();
const express = require("express");
const { createServer } = require("http");

const { graphqlExpress, graphiqlExpress } = require("graphql-server-express");

const schema = require("./graphql/schema");

const app = express();
app.use(express.json());
app.use(
  "/graphql",
  graphqlExpress({
    schema,
  })
);

app.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql",
  })
);

const server = createServer(app);

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server up on port ${port}...`));
