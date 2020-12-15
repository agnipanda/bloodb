var mongoose = require('mongoose');
var donModel = require('../models/donors');


var showData = function(req,res) {
  var bgr = req.body.bgr;
  var place = req.body.place;
  if(bgr!=''){
    var query = donModel.find({"bgroup" : bgr, "place": place});
    query.select('fname lname age number email place gender bgroup');

    query.exec(function(err, user){
      if(err) throw err;
      console.log(user);
      res.render("pages/data" , {"users":user})
    });
  }
}

module.exports = { "showData": showData };
