var express = require('express');
var router = express.Router();
let controller = require('../controller/mainController.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home', controller.index);
router.get('/about', controller.about);
module.exports = router;
