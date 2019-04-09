var express=require("express");
var app=express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path =require("path");
var ejsLayouts=require('express-ejs-layouts');
var bodyParser=require('body-parser');

var db=require('./app_server/models/db');
var Kullanici=require('./app_server/models/kullanici.js');

var onlineKullanici="";
app.use('/public',express.static(__dirname+'/public'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/app_server/views'))
app.use(ejsLayouts);

io.on('connection', function(socket){
  var username="";
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  socket.on('user', function(usr){
    username=usr;
    io.emit('user');
  });
  socket.on('disconnect', function () {
        Kullanici.findOneAndUpdate({username:username},{online:0},{new:true,runValidators: true}).then(doc=>{console.log(doc)}).catch(err=>{console.error(err)});
        io.emit('user');
    });
});
require(path.join(__dirname,'/app_server/routers/router'))(app);

http.listen(3000, function(){
  console.log('listening on *:3000');
});
