const jwt=require('jsonwebtoken');
const secret="xa12LA-9&%";
function authenticationIsOk(req,user){
  const body=req.body;
  return (body.email==user.email) && (body.password==user.password);
}
function createToken(user){
  const validTimeSec=30*60;
  const expirationDate=Date.now()/1000+validTimeSec;
  const token=jwt.sign({userID:user.email,exp:expirationDate},secret);
  return token;
}
module.exports.createToken = createToken;
module.exports.authenticationIsOk = authenticationIsOk;
module.exports.secret = secret;