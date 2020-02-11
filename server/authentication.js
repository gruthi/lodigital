const jwt=require('jsonwebtoken');
const secret="xa12LA-9&%";

function authenticationIsOk(token){
   try{
    verifiedJwt = jwt.verify(token,secret);
    return true;
  }catch(e){
    return false;
  }
}
function getMailAuthenticationIsOk(token){
  
   try{
    verifiedJwt = jwt.verify(token,secret);
    return verifiedJwt.email;
  }catch(e){
    return false;
  }
}
function createToken(user){
  const validTimeSec=300*60;
  const expirationDate=Date.now()/1000+validTimeSec;
  const token=jwt.sign({email:user.email,exp:expirationDate},secret);
  return token;

  
}
module.exports={
  createToken:createToken,
  authenticationIsOk:authenticationIsOk,
  getMailAuthenticationIsOk:getMailAuthenticationIsOk,
  secret:secret}