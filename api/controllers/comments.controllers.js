var mongoose = require('mongoose');
var Stock = mongoose.model('Stock');

//GET all comments for a stock
module.exports.commentsGetAll = function(req, res) {
        var stockId = req.params.stockId;
    console.log("GET stockId", stockId);
    
    Stock
        .findById(stockId)
        .select('comments')
        .exec(function(err, doc) {
        var response = {
            status: 200,
            // message : doc
            message: []
        };
        if (err) {
            console.log("Error finding stock");
            response.status = 500;
            response.message = err;
        } else if(!doc) {
            console.log("Stock id not found in database", stockId);
            response.status = 404;
            response.message = {
                "message" : "Stock ID not found " + stockId
            };
            } else {
                response.message = doc.comments ? doc.comments : [];
            }
            res
                .status(response.status)
                .json(response.message);
            });
        };
        
//GET single comment for a stock
module.exports.commentsGetOne = function(req, res) {
      var stockId = req.params.stockId;
      var commentId = req.params.commentId; 
    console.log("GET commentId" + commentId + " for stocks" + stockId);
    
    Stock
        .findById(stockId)
        .select('comments')
        .exec(function(err, stock) {
            var response = {
                status: 200,
                message: {}
            };
            if (err) {
                console.log("Error finding stock");
                response.status = 500;
                response.message = err;
            } else if(!stock) {
                console.log("Stock id not found in database", stockId);
                response.status = 404;
                response.message = {
                    "message" : "Stock ID not found" + stockId
                };
            }   else {
                //GET the comment
                response.message = stock.comments.id(commentId);
                //If the review doesn't exist Mongoose returns null
            if (!response.message) {
                    response.status = 404;
                    response.message = {
                        "message" : "Comment ID not found" + commentId
                    };
                }
            }
            
            res
                .status(response.status)
                .json( response.message );
        });
};

var _addComment = function(req, res, stock) {
    //in mongoose subdocuments like reviews are held in an array
    console.log(req.body.comment);
    
    
    stock.comments.push({
        comment: req.body.comment
    });
    
    stock.save(function(err, stockUpdated) {
        //save runs on model instance, in this case model is 'stock'
      console.log(stock.comments);
      if(err) {
          res
            .status(500)
            .json(err)
      } else {
          res
            .status(201)
            .json(stockUpdated.comments[stockUpdated.comments.length-1]);
            //getting the last comment
      }
        
    });
    
};

module.exports.commentsAddOne = function(req, res) {
        var stockId = req.params.stockId;
        // var reviewId = req.params.reviewId; 
    console.log("POST comment to stockId", stockId);
    
    Stock
        .findById(stockId)
        .select('comments')
        
        .exec(function(err, doc) {
            //doc returns here
            var response = {
                status: 200,
                // status: 201;
                // message: doc,
                message: []
            };
            if (err) {
                console.log("Error finding stock");
                response.status = 500;
                response.message = err;
            } else if(!doc) {
                console.log("stock id not found in database", stockId);
                response.status = 404;
                response.message = {
                    "message" : "Stock ID not found" + stockId
                };
            }  
            if (doc) {
                _addComment(req,res,doc);
            } else { 
            res
                .status(response.status)
                .json( response.message );
            }  
        });
};

module.exports.commentsUpdateOne = function(req, res) {
    
    var stockId = req.params.stockId;
    var commentId = req.params.commentId;
    console.log('PUT commentId ' + commentId + ' for stockId ' + stockId);
    
    Stock
        .findById(stockId)
        .select("comments")
        .exec(function(err, stock) {
            var thisReview = {
                status : 201,
                message: {}
            };
            if (err) {
        console.log("Error finding stock");
        response.status = 500;
        response.message = err;
      } else if(!stock) {
        console.log("stock id not found in database", id);
        response.status = 404;
        response.message = {
          "message" : "stock ID not found " + id
        };
      } else {
        // Get the comment
        this.comment = stock.comments.id(commentId);
        // If the review doesn't exist Mongoose returns null
        if (!thisComment) {
          response.status = 404;
          response.message = {
            "message" : "Comment ID not found " + commentId
          };
        }
      }
      if (response.status !== 200) {
        res
          .status(response.status)
          .json(response.message);
      } else {
        thisComment.name = req.body.name;
        thisComment.rating = parseInt(req.body.rating, 10);
        thisComment.comment = req.body.comment;
        stock.save(function(err, stockUpdated) {
          if (err) {
            res
              .status(500)
              .json(err);
          } else {
            res
              .status(204)
              .json();
          }
        });
      }
    });

};

// // module.exports.reviewsDeleteOne = function(req, res) {
// //     var hotelId = req.params.hotelId;
// //     var reviewId = req.params.reviewId;
// //     console.log('PUT reviewId ' + reviewId + ' for hotelId ' + hotelId);
    
// //     Hotel
// //         .findById(hotelId)
// //         .select("reviews")
// //         .exec(function(err, hotel) {
// //             var thisReview;
// //             var response = {
// //                 status : 200,
// //                 message: {}
// //             };
// //             if (err) {
// //         console.log("Error finding hotel");
// //         response.status = 500;
// //         response.message = err;
// //       } else if(!hotel) {
// //         console.log("Hotel id not found in database", id);
// //         response.status = 404;
// //         response.message = {
// //           "message" : "Hotel ID not found " + id
// //         };
// //       } else {
// //         // Get the review
// //         thisReview = hotel.reviews.id(reviewId);
// //         // If the review doesn't exist Mongoose returns null
// //         if (!thisReview) {
// //           response.status = 404;
// //           response.message = {
// //             "message" : "Review ID not found " + reviewId
// //           };
// //         }
// //       }
// //       if (response.status !== 200) {
// //         res
// //           .status(response.status)
// //           .json(response.message);
// //       } else {
// //         hotel.reviews.id(reviewId).remove();
// //         hotel.save(function(err, hotelUpdated) {
// //           if (err) {
// //             res
// //               .status(500)
// //               .json(err);
// //           } else {
// //             res
// //               .status(204)
// //               .json();
// //           }
// //         });
// //       }
// //     });

// };