const env = require('./config');
const jwt = require("jsonwebtoken");
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
            req.user = decoded;
            next();
        }else{
            return res.status(403).json({error:"Cannto verify user"});
        }
    }catch(err){
        return res.status(500).json({});
    }
}

module.exports = { authMiddleware };