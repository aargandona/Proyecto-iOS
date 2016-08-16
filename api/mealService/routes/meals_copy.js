var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{"name":"Silpancho", 
  			 "photo":"http://www.cocina-boliviana.com/base/stock/Post/60-image/60-image_web.jpg",
  			 "rating":1,
  			 "id":"6BB91FD1-9D04-423C-B6A7-67EEBFF5EEF0"
  			 },
  			 {
  			 "name":"pike", 
  			 "photo":"http://4.bp.blogspot.com/-yIn9Zjzks0s/UImhRtqxeOI/AAAAAAAAAdU/NNfdjFr5Bm8/s1600/DSCF0055.jpg",
  			 "rating":3,
  			 "id":"6BB9s1FD1-9D04-423C-B6A7-67EEBFF5EEF0"
  			 },
  			 {
  			 "name":"planchita", 
  			 "photo":"http://www.elcarmenbolivia.com/wp-content/uploads/2012/06/planchitas.jpg",
  			 "rating":3,
  			 "id":"6BB9ss1FD1-9D04-423C-B6A7-67EEBFF5EEF0"
  			 }
  		   ])	
});

module.exports = router;
