const MongoClient = require("mongodb").MongoClient;
const mongo = require("mongodb");
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const url = "mongodb://localhost:27017/";
const myDb = "lodigitalDB";
const usersColl = "users";
const graduates = "graduates";
const contactList = "contactList";
const authen = require("./authentication");
const courseMails=['120@gmail.com']
function getMyTime(){
  let d = new Date();
  let months = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  days[d.getDay()];
  return(`${days[d.getDay()]}: ${d.getDate()}/${months[d.getMonth()]}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`);
}

const account = {
    user:'donotreply.lodigital@gmail.com',
    password: 'kushdhyk' 
}
// params.to (email address/ addresses ) must be array
function sendEmail(account, params) {

    let transporter = nodemailer.createTransport(smtpTransport({        
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: account.user, 
            pass: account.password  
        }
    }));

    // array to list:
    let toEmail = params.to[0];
    for (var i = 1; i < params.to.length; i++) {
        toEmail += ', ' + params.to[i];
    }
   
    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Lodigital Service" <xx@gmail.com>',
        to: toEmail, // list of receivers
        subject: params.subject, // Subject line
        text: params.text, // plain text body
        html: params.html, // html body
        attachments: params.attachments
    };

    // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
        console.log('sending mail');
        if (error) {
          console.log(error);
        } else {
           console.log('Message %s sent: %s', info.messageId, info.response);
           transporter.close();
        }
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
        if (!courseMails.includes(req.body.email)){
          console.log('--courseMails--')
          return res.sendStatus(600);
        }
       
       console.log('req.body');
       console.log(req.body);
        dbo.collection(usersColl).insertOne(req.body, function(err, result) {
          if (err) {
            return res.sendStatus(500);
          }
          res.status(201);
          res.json(authen.createToken(req.body));
          return res.send();
         // return res.sendStatus(201);
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

  MongoClient.connect(url, function(err, db) {
    if (err) {
      return res.sendStatus(500);
    }
    
    const dbo = db.db(myDb);
    const data = req.body;
    
    dbo
    .collection(contactList)
    .insertOne(data, function(err, result) {

        if (err) {
          return res.sendStatus(500);
        }
        
        sendEmail(account,
            {to: ['henilana@gmail.com'], // list of receivers
            subject: 'פנייה חדשה התקבלה באתר לוד דיגיטל', // Subject line
            text:'',
            html:`<div><h3>להלן פרטי הפנייה שהתקבלה ב: ${getMyTime()}</h3>
                      <p>שם פרטי: ${data.firstName}</p>
                      <p>שם משפחה: ${data.lastName}</p>
                      <p>כתובת: ${data.address}</p>
                      <p>כתובת אימייל: ${data.email}</p>
                      <p>מספר טלפון: ${data.phone}</p>
                      <p>השכלה: ${data.education}</p>
                      <p>עיסוק כיום: ${data.occupation}</p>
                      <p>רקע בפיתוח תוכנה: ${data.BackSoftwareDvelopment}</p>
                      <p>האם תוכל להשקיע 10 שעות שבועיות בקורס: ${data.tenHours}</p></div>`,
            attachments:''
           });
       
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
