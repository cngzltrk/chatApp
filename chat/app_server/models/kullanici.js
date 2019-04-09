var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var kullaniciSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    online:Number
},{collection:"kullanicilar"});
var Kullanici=mongoose.model('Kullanici',kullaniciSchema);
module.exports=Kullanici;
