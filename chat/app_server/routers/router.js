var routeHome=require('./homeRouter.js');
var routeLogin=require('./loginRouter.js');
module.exports=function(app){
    app.use("/",routeLogin);
    app.use("/home",routeHome);
}
