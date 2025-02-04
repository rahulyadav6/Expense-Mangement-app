const env = require('./config');
const jwt = require("json-web-token");

const {secret: JWT_SECRET} = env;
const authMiddleware = (req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(403).json({
            error:"Invalid authorization"
        });
    }
    const token = authHeader.split(' ')[1];
    try{
        const decoded = jwt.verify(token, JWT_SECRET);
        if(decoded.email){
            req.email = decoded.email;
            next();
        }else{
            return res.status(403).json({error:"Cannto verify user"});
        }
    }catch(err){
        return res.status(500).json({});
    }
}

module.exports = { authMiddleware };