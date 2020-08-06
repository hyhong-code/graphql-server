const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const app = express();
app.use(
  "/graphql",
  graphqlHTTP((req, res, gql) => ({
    schema: null,
    rootValue: null,
    graphiql: true,
    pretty: true,
  }))
);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up on port ${port}...`));
