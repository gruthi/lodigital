const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
const myDb = "lodigitalDB";
const usersColl = "users";

function handleGet(req, res) {
  console.log(req.query.userName);
  //--------------------
  MongoClient.connect(url, function(err, db) {
    if (err) {
      res.sendStatus(500);
      return;
    }
    let dbo = db.db(myDb);
    let test = dbo
      .collection(usersColl)
      .find({ email: req.query.userName, password: req.query.passWord });
    test.count().then(number => console.log("count: " + number));
    if (test.count > 0) {
    }
    // console.log(test)
  });

  //--------------------
  res.send(req.body);
}
module.exports.handleGet = handleGet;
////////////////////////////
//
// dbo.createCollection(usersColl, function(err, res) {
//   if (err) {
//     res.sendStatus(400);
//     return;
//   }
//   console.log("Collection created!");
//   db.close();
// });
