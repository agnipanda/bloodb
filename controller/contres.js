var mongoose = require('mongoose');
var conModel = require('../models/conts');

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

  

}

module.exports = {"conUser" : conUser };
