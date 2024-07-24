const jwt=require('jsonwebtoken');
const middlewareControllers = {
    verifyTokenAndAdminAuth: (req, res, next) => {
            if(req.user._id === req.params.id  || req.user.admin ) {
                next();
            }else {
                return res.status(401).json("you are not allowed to delete other")
            }
    },
    verifyToken: (req, res,next)=>{
        const token=req.headers.token;
        if(token){
            const accessToken=token.split(" ")[1];
            jwt.verifyToken(accessToken,process.env.JWT_ACEESS_TOKEN,(err,user)=>{
                if(err){
                    res.status(403).json("Token is not valid");
                }
                req.user=user;
                next();
            })
        }
        else{
            res.status(401).json("You are not authenticated");
        }
    }
}


module.exports = middlewareControllers;