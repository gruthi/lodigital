console.log("app is loading");
const routeHelper = require("./routeHelper");
const express = require("express");
const multer = require("multer");
const upload = multer();
const app = express();
app.use(express.json());

app.post("/users/login", (req, res) => {
  console.log("login");
  routeHelper.login(req, res);
});

app.post("/users/register", (req, res) => {
  console.log("register");
  routeHelper.register(req, res);
});

// app.post("/graduate/insert", req,jwtVerifier({secret:authen.secret}), res=> {
//   console.log('graduateInsert');
//   routeHelper.graduateInsert( req, res);
// });
app.post("/graduate/insert", upload.any(),(req, res) => {
  // console.log("graduateInsert"+req.body);
  // console.log("graduateInsert"+req.header);
  routeHelper.graduateInsert(req, res);
  // if (authen.authenticationIsOk(req,user)){
  // routeHelper.graduateInsert( req, res);
  // res.send(authen.createToken(user));
  // }
  // else{
  //   return res.sendstatus(401);
  // }
});

app.get("/graduate/get", (req, res) => {
  console.log("graduateGet");
  routeHelper.graduateGet(req, res);
});

app.delete("/graduate/delete/:id", (req, res) => {
  console.log("graduateDelete");
  console.log(req.headers.authorization);
  routeHelper.graduateDelete(req, res);
});

app.post("/contactUs", (req, res) => {
  console.log('contactUs');
  routeHelper.contactUs( req, res);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});