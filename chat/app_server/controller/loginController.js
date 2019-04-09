
var Kullanici=require('./../models/kullanici.js');

module.exports.index=function(req,res){
        res.render('login');
}
module.exports.kayitPost=function(req,res){
  console.log(req.body.username);
  var yeniKullanici=new Kullanici({
    username:req.body.username,
    online:1
  });
  yeniKullanici.save(function(err){
    if(err)
      console.log(err);
    else {
      console.log('kişi kaydedildi Başarılı');
    }
  });
  res.render('index',{username:req.body.username});
}
module.exports.girisPost=function(req,res){
    Kullanici.findOneAndUpdate({username:req.body.username},{online:1},{new:true,runValidators: true}).then(doc=>{console.log(doc)}).catch(err=>{console.error(err)});
      res.render('index',{username:req.body.username});


}
module.exports.listeleGet=function(req,res){
      Kullanici.find({online:1},function(err,results)
      {
        res.send(results);
      });
}
