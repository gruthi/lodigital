 console.log("app is loading");
const routeHelper = require("./routeHelper");
const express = require("express");


const app = express();

app.get("/login", (req, res) => {
 
  routeHelper.handleGet( req, res);
  // res.send({res:"result from server 1234"});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
