var mongoose = require('mongoose');
var User     = mongoose.model('User');
var bcrypt   = require('bcrypt-nodejs');
var jwt      = require('jsonwebtoken');

module.exports.register = function(req, res) {
  console.log('registering user');

  var username = req.body.username;
  var name = req.body.name || null;
  var password = req.body.password;

  User.create({
    username: username,
    name: name,
    password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  }, function(err, user) {
    if (err) {
      console.log(err);
      res.status(400).json(err);
    } else {
      console.log('user created', user);
      res.status(201).json(user);
    }
  });
};

module.exports.login = function(req, res) {
  console.log('logging in user');
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({
    username: username
  }).exec(function(err, user) {
    if (!user || !password) {
      //fixed from udemy code which was if(err)
      console.log(err);
      res.status(400).json(err);
    } else {
      if (bcrypt.compareSync(password, user.password)) {
        //check that password and user encrypted pw are equal
        console.log('User found', user);
        var token = jwt.sign({ username: user.username }, 's3cr3t', { expiresIn: 3600});
         //token valid for one hour
        res.status(200).json({success: true, token: token});
      } else {
        console.log("user not found")
        res.status(401).json('Unauthorized');
      }
    }
  });
};

module.exports.authenticate = function(req, res, next) {
  var headerExists = req.headers.authorization;
  if (headerExists) {
    var token = req.headers.authorization.split(' ')[1]; //--> Authorization Bearer xxx
    jwt.verify(token, 's3cr3t', function(error, decoded) {
      if (error) {
        console.log(error);
        res.status(401).json('Unauthorized');
      } else {
        req.user = decoded.username;
        //decoded password/token
        next();
      }
    });
  } else {
    res.status(403).json('No token provided');
  }
};

// module.exports.searchAddOne = function(req, res) {

//         var symbol = req.params.Symbol;

//     console.log("Inside searchAddOne", req.params)
//         var symbol = req.params.symbol;
//     console.log("POST search to search page", symbol);
    
//     Stock
//         .find ({Symbol: symbol})
//         // .select('searches')
        
//         .exec(function(err, doc)
//             {
//                 console.log(doc);
//                 console.log(err);
             
//             if(err) {
//             console.log("Error finding stock symbol");
//             res.status = 500;
//             res.message = err;
                
//             } else if(!doc) {
//                 console.log("!doc");
//                 res.status(404)
//                 .json(
//                         "Search Symbol not found")
//             }   
//             if (doc) {
//                 console.log('found doc', doc);
//                 _saveSearch(req,res,doc);
//             } 
//             // else { 
//             // res
//             //     .status(201)
//             //     .json(doc);
//             // }  
//         });
// };