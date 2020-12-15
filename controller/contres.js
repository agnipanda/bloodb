var mongoose = require('mongoose');
var conModel = require('../models/conts');
const sgMail = require('@sendgrid/mail');
var dotenv = require('dotenv');
dotenv.config();

var conUser = function(req,res){
  var conmodel = new conModel({
    name : req.body.name,
    email : req.body.email,
    message : req.body.message
  });
  conmodel.save(function(err,doc){
    if(err) res.json(err);
    else   res.render('./pages/contactSuccess');
  });

  sgMail.setApiKey(process.env.API_KEY);
    const msg = {
        to: "bloodb@gmail.com",
        from: req.body.email,
        subject:"("+req.body.name+")"+"Contact Response",
        text: req.body.message,
    };
    sgMail.send(msg);
    const msg2 = {
        to: req.body.email,
        from: "bloodb@gmail.com",
        subject: "Thank You",
        text:"Hello,"+req.body.name+" . Contact for more details.",
    };
    sgMail.send(msg2);
    };



module.exports = {"conUser" : conUser };
