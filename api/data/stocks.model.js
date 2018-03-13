var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
   createdOn: {
        type: Date,
        "default": Date.now
   }
    });
    
var searchSchema = new mongoose.Schema({
    Symbol:{
        type: String,
        required: true
        
    },
createdOn: {
         type: Date,
         "default": Date.now
  }
});

var stockSchema = new mongoose.Schema({
   Symbol:{
       type: String,
       required: true},
   Name: {
       type: String,
       required: true},
   LastSale: String,
   Sector: String,
   StockUrl: String,
  comments: [commentSchema],
  searches: [searchSchema]
});



mongoose.model('Stock', stockSchema);