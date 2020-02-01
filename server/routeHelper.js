const MongoClient = require("mongodb").MongoClient;
const mongo = require("mongodb");
const url = "mongodb://localhost:27017/";
const myDb = "lodigitalDB";
const usersColl = "users";
const graduates = "graduates";

function login(req, res) {
  // console.log(req.query.userName);
  console.log("--0--");
  MongoClient.connect(url, function(err, db) {
    if (err) {
      console.log("--1--");
      return res.sendStatus(500);
    }
    const dbo = db.db(myDb);
    //req.body =={ email: req.body.email,password: req.body.password }
    dbo.collection(usersColl).findOne(req.body, function(err, userFound) {
      if (err) {
        console.log("--2--");
        return res.sendStatus(500);
      }
      if (!userFound) {
        console.log("--3--");
        return res.sendStatus(404);
      }
      return res.sendStatus(200);
    });
  });
}
function register(req, res) {
  // console.log(req.query.userName);
  console.log("--0--");
  MongoClient.connect(url, function(err, db) {
    if (err) {
      console.log("--1--");
      return res.sendStatus(500);
    }
    console.log("--1.1--");
    const dbo = db.db(myDb);
    dbo
      .collection(usersColl)
      .findOne({ email: req.body.email }, function(err, userFound) {
        if (err) {
          console.log("--2--");
          return res.sendStatus(500);
        }
        if (userFound) {
          console.log("--3--");
          return res.sendStatus(400);
        }
        dbo.collection(usersColl).insertOne(req.body, function(err, result) {
          if (err) {
            console.log(err.message);
            return res.sendStatus(500);
          }
          return res.sendStatus(201);
        });
      });
  });
}
function graduateInsert(req, res) {
  // console.log(req.query.userName);
  console.log("--0--");
  MongoClient.connect(url, function(err, db) {
    if (err) {
      console.log("--1--");
      return res.sendStatus(500);
    }
    console.log("--1.1--");
    const dbo = db.db(myDb);

    dbo.collection(graduates).insertOne(req.body, function(err, result) {
      if (err) {
        console.log(err.message);
        res.status(500);
        return res.send(graduates);
      }
      dbo
        .collection(graduates)
        .find({})
        .toArray(function(err, allGraduates) {
          return res.status(201).send(allGraduates);
        });
      // res.status(201);
      // return res.send(req.body);
    });
  });
}
function graduateGet(req, res) {
  // console.log(req.query.userName);
  console.log("--0--");
  MongoClient.connect(url, function(err, db) {
    if (err) {
      console.log("--1--");
      return res.sendStatus(500);
    }
    console.log("--1.1--");
    const dbo = db.db(myDb);
    dbo
      .collection(graduates)
      .find({})
      .toArray(function(err, allGraduates) {
        if (err) {
          console.log(err.message);
          return res.status(500);
          // return res.send(allGraduates);
        }

        res.status(200);
        return res.send(allGraduates);
      });
  });
}
function graduateDelete(req, res) {
  // console.log(req.query.userName);
  console.log("--0--");
  MongoClient.connect(url, function(err, db) {
    if (err) {
      console.log("--1--");
      return res.sendStatus(500);
    }
    console.log("--1.1--");
    const dbo = db.db(myDb);
    console.log("reqid - " + req.params.id);
    dbo
      .collection(graduates)
      .deleteOne({ _id: new mongo.ObjectId(req.params.id) }, function(
        err,
        obj
      ) {
        if (err) {
          console.log(err.message);
          return res.status(500).send(graduates);
          // return res.send(allGraduates);
        }
        console.log("del: " + obj);
        //res.status(200);
        return res.status(200); //.send(graduates);
      });
  });
}

// function handleGet(req, res) {
//   console.log(req.query.userName);

//   MongoClient.connect(url, function(err, db) {
//     if (err) {
//       return res.sendStatus(500);
//     }
//     let dbo = db.db(myDb);
//     dbo.collection(usersColl).findOne({ email: req.query.email, password: req.query.passWord },
//         function(err, result) {
//           if (err) {
//             // throw err;
//             res.sendStatus(403);
//             return;
//           }
//           if (result) {
//             console.log('--1--');
//             res.sendStatus(200);
//             return;
//           } else {
//             console.log('--2--');
//             res.sendStatus(401);
//             return;
//           }
//           // db.close();
//         }
//       );
//   });
// }
// module.exports.handleGet = handleGet;
module.exports.register = register;
module.exports.login = login;
module.exports.graduateInsert = graduateInsert;
module.exports.graduateGet = graduateGet;
module.exports.graduateDelete = graduateDelete;
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
