var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.put('/save', function (req, res) {
 
});

function processEngine(id) {
  
}

module.exports = router;
