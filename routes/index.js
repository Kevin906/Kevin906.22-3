//Khai báo thư viện experess
var express = require('express');
//Khai báo router (định tuyến) => set path cho web
var router = express.Router();

/* GET home page. (localhost: 3000 ) */
router.get('/', function(req, res, next) {
  //C1:console.log("THis is homepage");
  //C2:res.send("<h1>This is homepage</h1>")
  res.render('index');
});

router.get('/HaNoi', function(req, res, next) {
  res.render('GreenWich/HaNoi');
});

router.get('/DaNang', function(req, res, next) {
  res.render('GreenWich/DaNang');
});

router.get('/CanTho', function(req, res, next) {
  res.render('GreenWich/CanTho');
});

router.get('/HoChiMinh', function(req, res, next) {
  res.render('GreenWich/HoChiMinh');
});

router.get('/demo',(req, res) => {
  res.render('demo')
})
//exports module => bắt buộc

module.exports = router;
