// var mongoose = require('mongoose');
// var Search = mongoose.model('Search');

// module.exports.getOneSymbol = function(req, res) {
//     var symbol = req.params.symbol;

//     // var thisStock = stockData(stockId);
//     //can stockId be symbol?
//     console.log("GET stockSymbol", symbol);
//     Search

//         .find({ Symbol: symbol })
//         //({ parameter_name: req.params.name })
//         .exec(function(err, doc) {
//                 // console.log(doc);
//                 // console.log(err);

//                 if (err) {
//                     console.log("Error finding stock symbol");
//                     res.status = 500;
//                     res.message = err;

//                 }
//                 else if (!doc) {
//                     console.log("!doc");
//                     res.status(404)
//                         .json(
//                             "Stock Symbol not found")
//                 }

//                 else {
//                     console.log("res");
//                     console.log("get one:", doc);
//                     res

//                         .status(200)

//                         .json(doc);
//                         doc.searches.push({
//                         Symbol: req.body.symbol
//                         //  symbol: req.params.symbol
//                     });

//                     doc.save(function(err, searchUpdated) {
//                             //save runs on model instance, in this case model is 'stock'
//                             console.log(req.body.symbol);
//                             if (err) {
//                                 res
//                                     .status(500)
//                                     .json(err)
//                             }
//                             else {
//                                 res
//                                     .status(201)
//                                     .json(searchUpdated.searches[searchUpdated.searches.length - 1]);
//                                 //getting the last search query
//                             }

                        

//                     });

//             }
//             //  if (doc) {
//             //      console.log('found doc', doc);
//             //     // _saveSearch(req,res,doc);

//         });
//     };
    
    
// module.exports.searchAddOne = function(req, res) {

//         var symbol = req.body.symbol;

//     console.log("Inside searchAddOne", req.body)

//     console.log("POST search to search page", symbol);
    
//     Search
//         .find ({Symbol: symbol})
//         // .select('searches')
        
//         .exec(function(err, doc)
//             {
//                 console.log(doc);
//                 // console.log(err);
             
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
//              if (doc) {
//                  console.log('found doc', doc);
//                 _saveSearch(req,res,doc);
//             } 
//             // else { 
//             // res
//             //     .status(201)
//             //     .json(doc);
//             // }  
//         });
// };
// var _saveSearch = function(req, res, search) {
//     //in mongoose subdocuments like reviews are held in an array
//     console.log("********_savesearch", search);
//     console.log('********req body is', req.body);
    
//     search.searches.push({
//         Symbol: req.body.symbol
//         //  symbol: req.params.symbol
//     });
    
//     search.save(function(err, searchUpdated) {
//         //save runs on model instance, in this case model is 'stock'
//       console.log(req.body.search);
//       if(err) {
//           res
//             .status(500)
//             .json(err)
//       } else {
//           res
//             .status(201)
//             .json(searchUpdated.searches[searchUpdated.searches.length-1]);
//             //getting the last search query
//       }
        
//     });
    
// };

