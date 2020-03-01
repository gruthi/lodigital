const MongoClient = require("mongodb").MongoClient;
const mongo = require("mongodb");
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const authen = require("./authentication");
const url = "mongodb://localhost:27017/";
const myDb = "lodigitalDB";
const usersColl = "users";
const graduates = "graduates";
const contactList = "contactList";
const timeLogin=18000;
const timeResetPassword=1200;
const courseMails=[
  'yosriz@gmail.com','770mdk@gmail.com','adi9788@yahoo.com','adisogermay@gmail.com',
'agammor224@gmail.com','bykjennifer@gmail.com','chanieluz@gmail.com','distne72@gmail.com',
'gozmanv@013.net','gruthi@gmail.com','harpaz.g@gmail.com','hasan.hta6@gmail.com',
'henilana@gmail.com','jeck99@gmail.com','lodigital2019.user@savoirplus.pt',
'meirigel123@walla.co.il','Netanelhadad@gmail.com','rezrati@gmail.com',
'simhamahari@gmail.com','taliyaacov@hotmail.com','yakovm1690@gmail.com',
'yosefel123@gmail.com','yys770770@gmail.com','zohar87@gmail.com']

function getMyTime(){
  let d = new Date();
  var days = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];
  days[d.getDay()];
  return(`יום ${days[d.getDay()]} ${d.getDate()}.${(d.getMonth()+1)}.${d.getFullYear()}, בשעה ${d.getHours()}:${d.getMinutes()}`);
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

  try{
     // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      console.log('sending mail');
      if (error) {
        // console.log(error);
        return error;
      } else {
         console.log('Message %s sent: %s', info.messageId, info.response);
         transporter.close();
      }
    });
  } catch(e){
      throw e;
  }
      
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
      res.json(authen.createToken(req.body,timeLogin));
     // res.json({'token':authen.createToken(req.body,timeLogin),'manager':req.body.manager});
     console.log(res);
    
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
    dbo  .collection(usersColl)
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
        if( req.body.email == 'lodigital2019.user@savoirplus.pt'){
          req.body.manager=true;
        }
        dbo.collection(usersColl).insertOne(req.body, function(err, result) {
          if (err) {
            return res.sendStatus(500);
          }
          res.status(201);
          res.json(authen.createToken(req.body,timeLogin));
          return res.send();
         // return res.sendStatus(201);
        });
      });
  });
}

function forgotPassword(req, res) {

  MongoClient.connect(url, function(err, db) {
    if (err) {
      return res.sendStatus(500);
    }
    
    const dbo = db.db(myDb);
    const data = req.body;
    console.log('data.email1');
    console.log(data.email);
    dbo
    .collection(usersColl)
    .findOne({ email: data.email }, function(err, result) {
      console.log('data.email2');
      console.log(data.email);
        if (err) {
          console.log('err: dint find mail')
          return res.sendStatus(500);
        }
        // const token = authen.createTokenLink(data);
        const token = authen.createToken(data,timeResetPassword);
        let link = `http://localhost:3000/resetPassword/${token}`;

        try{
          sendEmail(account,
            {to: [data.email], // list of receivers
            subject: 'שחזור סיסמא לאתר לודיגיטל', // Subject line
            text:'',
            html:`<h2>שחזור סיסמא</h2>
                  <p>שלום,<br>קיבלת את המייל הזה בגלל שהנך (או מישהו אחר) ביקשת לשחזר את הסיסמא שלך באתר לודיגיטל.</p>
                  <a href=${link}>לחץ כאן לשינוי סיסמתך באתר לאחרת</a><br>
                  <p>נא לשים לב! הקישור תקף לרבע שעה בלבד!</p>
                  <p>(אם המייל לא נשלח על ידך, יש להתעלם ממנו)</p>`,
            attachments:''
           });
        }catch(error){
          console.log('cath error');
          return res.sendStatus(404);
        }
       console.log(res.status);
        return res.sendStatus(200);
          
        });
    });
}

function resetPassword(req, res) {
  
  console.log("forgotPassword");
  console.log(req.body);
  //***** לשנות את זה חזרה:::/
  if(!authen.authenticationIsOk(req.body.token)){
    return res.sendStatus(401);
  }
  MongoClient.connect(url, function(err, db) {
    if (err) {
      console.log("---1---");
      return res.sendStatus(500);
    }
    console.log("---2---");
    const dbo = db.db(myDb);

    dbo
    .collection(usersColl)
    .updateOne( { email : req.body.email }, {$set: { password : req.body.password }}, function(err, result) {
        if (err) {
          console.log("---4---");
          return res.sendStatus(500);
        }
        // else if (!result.result.nModified){
        else if (!result.result.n){
          return res.sendStatus(404);
        }else{
          return res.sendStatus(200);
        };
    });
    console.log("---6---");
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
    //req.body.email=authen.getMailAuthenticationIsOk(req.body.email);
    req.body.email=authen.authenticationIsOk(req.body.email);
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

function getContactsList(req, res) {
  MongoClient.connect(url, function(err, db) {
   if (err) {
     return res.sendStatus(500);
   }
   const dbo = db.db(myDb);
   dbo
     .collection(contactList)
     .find({})
     .toArray(function(err, allContacts) {
       if (err) {
         return res.status(500);
        }

       res.status(200);
       return res.send(allContacts);
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
    //const mailToCheck=authen.getMailAuthenticationIsOk(req.headers.authorization)
    const mailToCheck=authen.authenticationIsOk(req.headers.authorization)
 
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
            subject: 'פנייה חדשה התקבלה באתר לודיגיטל', // Subject line
            text:'',
            html:`<div><h3>להלן פרטי הפנייה שהתקבלה ב${getMyTime()}:</h3>
                      <p>שם פרטי: ${data.firstName}</p>
                      <p>שם משפחה: ${data.lastName}</p>
                      <p>כתובת: ${data.address}</p>
                      <p>כתובת אימייל: ${data.email}</p>
                      <p>מספר טלפון: ${data.phone}</p>
                      <p>השכלה: ${data.education}</p>
                      <p>עיסוק כיום: ${data.occupation}</p>
                      <p>רקע בפיתוח תוכנה: ${data.backSoftwareDvelopment}</p>
                      <p>האם תוכל להשקיע 10 שעות שבועיות בקורס? ${data.tenHours}</p></div>`,
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
module.exports.getContactsList = getContactsList;
module.exports.forgotPassword = forgotPassword;
module.exports.resetPassword = resetPassword;