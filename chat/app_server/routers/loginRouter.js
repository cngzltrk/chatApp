var express=require('express');
var router=express.Router();
var controller=require('./../controller/loginController.js');
router.get("/",controller.index);
router.post("/kayit",controller.kayitPost);
router.post("/giris",controller.girisPost);
router.get("/listele",controller.listeleGet);
module.exports=router;
