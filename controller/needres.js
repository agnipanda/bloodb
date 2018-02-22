var mongoose = require('mongoose');
var donModel = require('../models/donors');


var showData = function(req,res) {
  var bgr = req.body.bgr;
  if(bgr!=''){
    var query = donModel.find({"bgroup" : bgr});
    query.select('fname lname age place gender bgroup');

    query.exec(function(err, user){
      if(err) throw err;
      console.log(user);
      res.render("pages/data" , {"users":user})
    });
  } 
}

module.exports = { "showData": showData };
