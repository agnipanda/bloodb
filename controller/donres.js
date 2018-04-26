var mongoose = require('mongoose');
var donModel = require('../models/donors');
const sgMail = require('@sendgrid/mail');
var dotenv = require('dotenv');
dotenv.config();


var donUser = function(req,res){
  var donmodel = new donModel({
    fname : req.body.fname,
    lname : req.body.lname,
    age : req.body.age,
    email : req.body.email,
    place : req.body.place,
    gender : req.body.gender,
    bgroup : req.body.bgroup

  });
  donmodel.save(function(err,doc){
    if(err) res.json(err);
    else {
      res.render('./pages/success');
    };
  });
  sgMail.setApiKey(process.env.API_KEY);
    const msg = {
        to: "bloodb@gmail.com",
        from: req.body.email,
        subject:"("+req.body.name+")"+"Donation Response",
        text: "Person Stays in" + req.body.place + ", BloodGroup: "+ req.body.bgroup,
    };
    sgMail.send(msg);
    const msg2 = {
        to: req.body.email,
        from: "bloodb@gmail.com",
        subject: "Thank You",
        text:"Hello,"+req.body.fname+" " + req.body.lname +" . Thanks for saving a life!, We will contact you soon with further details about donation time and date",
    };
    sgMail.send(msg2);
    };


module.exports = {"donUser" : donUser };
