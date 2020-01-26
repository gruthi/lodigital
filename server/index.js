 console.log("app is loading");
const routeHelper = require("./routeHelper");
const express = require("express");
const app = express();

app.use(express.json());

app.post("/users/login", (req, res) => {
  console.log('login');
  routeHelper.login( req, res);
 });
app.post("/users/register", (req, res) => {
  console.log('register');
  routeHelper.register( req, res);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
