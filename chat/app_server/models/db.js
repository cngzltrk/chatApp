var mongoose=require('mongoose');
mongoose.Promise=require('bluebird');

var mongoDB='mongodb://localhost:27017/chat';
mongoose.connect(mongoDB, { useNewUrlParser: true });
