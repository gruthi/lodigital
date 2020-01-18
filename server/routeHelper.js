const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
const myDb = "lodigitalDB";
const usersColl = "users";


function login(req, res) {
  console.log('--0--');
  MongoClient.connect(url, function(err, mongoClient) {
    if (err) {
      console.log('--1--');
      return res.sendStatus(500);
    }
    const dbo = mongoClient.db(myDb);
    //req.body =={ email: req.body.email,password: req.body.password }
    dbo.collection(usersColl).findOne(req.body,
        function(err, userFound) {
         //  dbo.close();
         console.log('--in coonetc--');
          if (err) {
            // dbo.close();
            console.log('--2--');
            return res.sendStatus(500);
          }
          if (!userFound) {
            // dbo.close();
            console.log('--3--');
            return res.sendStatus(404);
          }
          // dbo.close();
          return res.status(200).send(userFound);
         
  });
});
}
function register(req, res) {
   console.log('--0--');
  MongoClient.connect(url, function(err, db) {
    if (err) {
      console.log('--1--');
      return res.sendStatus(500);
    }
    const dbo = db.db(myDb);
    dbo.collection(usersColl).findOne({ email: req.body.email },
        function(err, userFound) {
          if (err) {
            console.log('--2--');
            return res.sendStatus(500);
          }
          if (userFound) {
            console.log('--3--');
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
function handleGet(req, res) {
 
  MongoClient.connect(url, function(err, db) {
    if (err) {
      return res.sendStatus(500);
    }
    let dbo = db.db(myDb);
    dbo.collection(usersColl).findOne({ email: req.query.email, password: req.query.passWord },
        function(err, result) {
          if (err) {
            // throw err;
            res.sendStatus(403);
            return;
          }
          if (result) {
            console.log('--1--');
            res.sendStatus(200);
            return;
          } else {
            console.log('--2--');
            res.sendStatus(401);
            return;
          }
          // db.close();
        }
      );
  });
}
module.exports.handleGet = handleGet;
module.exports.register = register;
module.exports.login = login;
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
