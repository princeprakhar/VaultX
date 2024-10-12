const jwt = require("jsonwebtoken");

JWT_SECRET = process.env.JWT_SECRET ||  "";


const authMiddleware = async (req, res, next) => {
    const header = req.headers.authorization;
    if(!header || !header.startsWith("Bearer ")){
        return res.status(401).json({message : "Unauthorized"});
    }
    const token = header.split(" ")[1];
    try{
        const payload = jwt.verify(token, JWT_SECRET);
        req.userid = payload.userid;
        next();
    }
    catch(err){
        return res.status(401).json({message : "Unauthorized"});
    }
}


module.exports = {authMiddleware};
