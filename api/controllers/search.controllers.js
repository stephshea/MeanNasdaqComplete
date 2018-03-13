var mongoose = require('mongoose');
var Search = mongoose.model('Search');



module.exports.searchAddOne = function(req, res) {

        var symbol = req.body.symbol;
     var createdOn = new Date();

    console.log("Inside searchAddOne", req.body)

    console.log("POST search to search page", symbol);
    
    Search.create({
        Symbol: symbol
},
        
  function(err, doc)
            {
                if(err) {
            console.log("Error saving stock symbol");
            res
                .status(500)
                .json(err);
                } 
                
           else {
             
                 console.log('found doc', doc);
           
            res
                .status(201)
                .json(doc);
            } 
            });
}


module.exports.searchGetAll = function(req, res){
    console.log(req.query);
    
    Search
        .find()
        .exec(function(err, doc){
            if(!doc) {
                console.log("No saved searches");
                res
                    .status(404)
                    .json({"message": "No saved searches"});
                return;
            }
            else if(err){
                console.log("Error finding saved searches");
                res
                    .status(500)
                    .json(err);
            }

            console.log("Returned doc", doc);
            res
                .status(200)
                .json(doc);  
         });
};

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

