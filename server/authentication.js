const jwt=require('jsonwebtoken');
const secret="xa12LA-9&%IHRG";

function authenticationIsOk(token){
   try{
    verifiedJwt = jwt.verify(token,secret);
    return verifiedJwt.email;
  }catch(e){
    return false;
  }
}

function createToken( user, minutes ){
  const validTimeSec=minutes;
  const expirationDate=Date.now()/1000+validTimeSec;
  const token=jwt.sign({email:user.email,exp:expirationDate},secret);
  return token;
}

module.exports={
  createToken:createToken,
  // createTokenLink:createTokenLink,
  authenticationIsOk:authenticationIsOk,
 // getMailAuthenticationIsOk:getMailAuthenticationIsOk,
  secret:secret}