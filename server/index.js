console.log("app is loading");
const routeHelper = require("./routeHelper");
const express = require("express");
const multer = require("multer");
const upload = multer();
const app = express();
const utils = require("./production_utils");

app.use(express.json());

app.post("/users/login", (req, res) => {
  routeHelper.login(req, res);
});

app.post("/users/register", (req, res) => {
 routeHelper.register(req, res);
});

app.post("/users/forgotPassword", (req, res) => {
  console.log("forgotPassword");
  routeHelper.forgotPassword(req, res);
});

app.put("/users/resetPassword", (req, res) => {
  console.log("resetPassword");
  routeHelper.resetPassword(req, res);
});

// app.post("/graduate/insert", req,jwtVerifier({secret:authen.secret}), res=> {
//   console.log('graduateInsert');
//   routeHelper.graduateInsert( req, res);
// });
app.post("/graduate/insert", upload.any(),(req, res) => {
  routeHelper.graduateInsert(req, res);
});

app.get("/graduate/get", (req, res) => {
  routeHelper.graduateGet(req, res);
});

app.delete("/graduate/delete/:id", (req, res) => {
  routeHelper.graduateDelete(req, res);
});

app.post("/contactUs", (req, res) => {
  console.log('contactUs');
  routeHelper.contactUs( req, res);
});

app.get("/getContactsList", (req, res) => {
  console.log('getContactsList');
  routeHelper.getContactsList( req, res);
});
utils.handleProduction(express, app);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
