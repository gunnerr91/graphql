const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.send("Hello world");
});

app.listen(8010);
