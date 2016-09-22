var middleware = {
   requireAuthentication:function(req,res,next){
    console.log('Hit the auth middleware');
    next();
   },
   logger:function(req,res,next){
   	console.log('Request method '+ new Date().toString() + ' ' + req.method + ' ' + req.originalUrl );
   	next();
   }
};

   module.exports=middleware;
