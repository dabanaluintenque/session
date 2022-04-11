var express = require('express');
var moment = require('moment');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/session', function(req, res){

  var sess = req.session;


  if(sess.views){

   
   sess.views=1;
   sess.views++;
  }



  else {

    sess.views ="for the first Time";
  }


  res.json({
    views: sess.views,
    dates: moment().format('MMMM Do YYYY, h:mm:ss a')
  })
});

module.exports = router;
