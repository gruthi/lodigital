const MongoClient = require("mongodb").MongoClient;
const mongo = require("mongodb");
const nodemailer = require('nodemailer');
const url = "mongodb://localhost:27017/";
const myDb = "lodigitalDB";
const usersColl = "users";
const graduates = "graduates";
const contactList = "contactList";
const authen = require("./authentication");

var smtpTransport = require('nodemailer-smtp-transport');

const account = {
    user:'donotreply.lodigital@gmail.com',
    password: 'kushdhyk' 
}

function sendEmail(account, params) {
    
    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport(smtpTransport({
    // var smtpTransport = nodemailer.createTransport({
        service: 'Gmail', // sets automatically host, port and connection security settings
        auth: {
            user: account.user, 
            pass: account.password  
        }
    }));

    var toEmail = params.to[0];
    for (var i = 1; i < params.to.length; i++) {
        toEmail += ', ' + params.to[i];
    }

    // setup email data with unicode symbols
    var mailOptions = {
        from: params.from, // sender address
        to: toEmail, // list of receivers
        subject: params.subject, // Subject line
        text: params.text, // plain text body
        html: params.html, // html body
        attachments: params.attachments
    };

    // send mail with defined transport object
    // smtpTransport.sendMail(mailOptions, (error, info) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            // return console.log('Error while sending mail: ' + error);
            return { error : error };
        } else {
            return { success : info.messageId };
            //   console.log('Message sent: %s', info.messageId);
        }
        // ????
        smtpTransport.close(); // shut down the connection pool, no more messages.
        transporter.close();
    });
}

function login(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) {
      return res.sendStatus(500);
    }
    const dbo = db.db(myDb);
    //req.body =={ email: req.body.email,password: req.body.password }
    dbo.collection(usersColl).findOne(req.body, function(err, userFound) {
      if (err) {
       return res.sendStatus(500);
      }
      if (!userFound) {
        return res.sendStatus(404);
        // 401
      }
      res.status(200);
      res.json(authen.createToken(req.body));
      return res.send;
      //return res.sendStatus(200);
    });
  });
}

function register(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) {
      return res.sendStatus(500);
    }
    const dbo = db.db(myDb);
    dbo
      .collection(usersColl)
      .findOne({ email: req.body.email }, function(err, userFound) {
        if (err) {
          return res.sendStatus(500);
        }
        if (userFound) {
          return res.sendStatus(400);
        }
        dbo.collection(usersColl).insertOne(req.body, function(err, result) {
          if (err) {
            return res.sendStatus(500);
          }
          res.json(authen.createToken(req.body));
          return res.sendStatus(201);
        });
      });
  });
}
function graduateInsert(req, res) {
  if(!authen.authenticationIsOk(req.body.email)){//this is not  email but token
     return res.sendStatus(401);
  }
  MongoClient.connect(url, function(err, db) {
    if (err) {
      return res.sendStatus(500);
    }
    const dbo = db.db(myDb);
    req.body.email=authen.getMailAuthenticationIsOk(req.body.email);
    dbo.collection(graduates).insertOne(req.body, function(err, result) {
      if (err) {
        res.status(500);
        return res.send; //(graduates);
      }
      dbo
        .collection(graduates)
        .find({})
        .toArray(function(err, allGraduates) {
          return res.status(201).send(allGraduates);
        });
     });
  });
}
function graduateGet(req, res) {
   MongoClient.connect(url, function(err, db) {
    if (err) {
      return res.sendStatus(500);
    }
    const dbo = db.db(myDb);
    dbo
      .collection(graduates)
      .find({})
      .toArray(function(err, allGraduates) {
        if (err) {
          return res.status(500);
         }

        res.status(200);
        return res.send(allGraduates);
      });
  });
}
function graduateDelete(req, res) {
  if (!authen.authenticationIsOk(req.headers.authorization)) {
    return res.sendStatus(401);
  }
   MongoClient.connect(url, function(err, db) {
    if (err) {
      return res.sendStatus(500);
    }
    const mailToCheck=authen.getMailAuthenticationIsOk(req.headers.authorization)
 
    const dbo = db.db(myDb);
    dbo
      .collection(graduates)
      .deleteOne({ _id: new mongo.ObjectId(req.params.id),email:mailToCheck }, function(
        err,
        obj
      ) {
        if (err) {
          return res.status(500); //.send(graduates);
        }
        if (obj.deletedCount == 1){
        return res.sendStatus(200); //.send(graduates);
        }
        else{
          return res.sendStatus(403);
        }
      });
  });
}
function contactUs(req, res) {
  console.log("--5--");

  MongoClient.connect(url, function(err, db) {
    if (err) {
      console.log("--1--");
      return res.sendStatus(500);
    }
    console.log("--1234--");
    console.log("--1.1--");
    // console.log(res);

    const dbo = db.db(myDb);
    console.log("--1.4--");
    
    dbo
    .collection(contactList)
    .insertOne(req.body, function(err, result) {
        console.log("--1.5--");

        if (err) {
          // console.log(err.message);
          console.log("--1.2--");
          return res.sendStatus(500);
          // res.status(500);
          // return res.send; /*(graduates); *** */
        }
        console.log("--1.6--");
        const data = req.body;
        // const mailWasSend = 
        sendEmail(account,
           {from: account.user,
            to: 'henilana@gmail.com', // list of receivers
            subject: 'פנייה חדשה התקבלה באתר לוד דיגיטל', // Subject line
            html: `<p>${data.firstName}</p>
            <p>${data.lastName}</p>
            <p>${data.address}</p>` // html body,
           });
        //    where to send the return??? 
        return res.sendStatus(200);
          
        });
    });
}

module.exports.register = register;
module.exports.login = login;
module.exports.graduateInsert = graduateInsert;
module.exports.graduateGet = graduateGet;
module.exports.graduateDelete = graduateDelete;
module.exports.contactUs = contactUs;
