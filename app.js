require("dotenv").config({ path: "./config/config.env" });
require("./config/db")();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const schema = require("./graphql/schema");
const rootValue = require("./graphql/queries/index");

const app = express();
app.use(
  "/graphql",
  graphqlHTTP((req, res, gql) => {
    return {
      schema,
      rootValue,
      graphiql: true,
      pretty: true,
    };
  })
);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up on port ${port}...`));
