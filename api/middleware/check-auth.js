var jwt = require("jsonwebtoken");

module.exports = function(req, res, next){
   try{
      var token = req.headers.token;
      var decode = jwt.verify(token, "techApi002");
      next();
   }catch(err){
      res.status(401).json({
         message: "Auth Fail",
      });
   }
};