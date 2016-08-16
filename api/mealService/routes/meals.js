var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{"name":"Pollo", 
  			 "photo":"http://noticiasdecocina.com/wp-content/uploads/2015/12/comida-destacada-200x200.jpg",
  			 "rating":3,
  			 "id":"6BB91FD1-9D04-423C-B6A7-67EEBFF5EEF0",
			 "latitud":-17.372595,
			 "longitud":-66.161620
  			 },
  			 {
  			 "name":"Silpancho", 
  			 "photo":"https://s-media-cache-ak0.pinimg.com/236x/88/29/fc/8829fc1e7ee42983117f3318706a4fc0.jpg",
  			 "rating":4,
  			 "id":"6BB9s1FD1-9D04-423C-B6A7-67EEBFF5EEF0",
			 "latitud":-17.378601,
			 "longitud":-66.166517
  			 },
  			 {
  			 "name":"Pique", 
  			 "photo":"http://www.alexiafoods.com/cache/images/rpsrecipes/img_6548_5579.jpg",
  			 "rating":2,
  			 "id":"6BB9ss1FD1-9D04-423C-B6A7-67EEBFF5EEF0",
			 "latitud":-17.379987,
			 "longitud":-66.160395
  			 },
  			 {
  			 "name":"Trancapecho", 
  			 "photo":"https://s-media-cache-ak0.pinimg.com/736x/71/37/4a/71374a0e9d3e2117a099367f047727b8.jpg",
  			 "rating":5,
  			 "id":"6BC71FD1-9D04-423C-B6A7-67EEBFF5EEF0",
			 "latitud":-17.378673,
			 "longitud":-66.159243
  			 }
  		   ])	
});

module.exports = router;
