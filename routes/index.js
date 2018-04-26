var express = require('express');
var router = express.Router();
var contres = require('../controller/contres');
var donres = require('../controller/donres');
var needres = require('../controller/needres');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('fpage', { title: 'Blood Donation' });
});

router.get('/index', function(req,res){
  res.render('pages/index');
});

router.get('/donate', function(req,res){
  res.render('pages/donate');
});

router.get('/need', function(req,res){
  res.render('pages/need');
});

router.get('/contact', function(req,res){
  res.render('pages/contact');
});

router.get('/success', function(req,res){
  res.render('fpage');
});

router.post('/contact', contres.conUser );
router.post('/donate', donres.donUser);
router.post('/need', needres.showData);
module.exports = router;
