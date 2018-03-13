angular.module('meannasdaq').controller('SearchController', SearchController);
//front-end display
function SearchController($route, $routeParams, $window, $location, stockDataFactory, AuthFactory, jwtHelper) {
    var vm = this;
    
 vm.symbolSearch = function() {
     var symbol = vm.symbol.toUpperCase();
     var savedSymbol = {symbol: vm.symbol.toUpperCase()
     };
     
     console.log("vm.symbolSearch", symbol);
     stockDataFactory.searchDisplay(symbol).then(function(response) {
        console.log("searchdisplayctrl", response);
        vm.stock = response.data[0];
        console.log('stockdatafactory searchdisplay', vm.stock.Symbol);
 if (response.data){
		        //make ajax call once search is successful to save
		        console.log("saved");
		        
		        
    	        stockDataFactory.searchAddOne({symbol: symbol}).then(function(response){
    	        console.log('in searchdisplay after saved', response);
    	        }).catch(function(error){
    	           // if(error){
    	            console.log(error);
    	       // }
    	        }
    	       );
      	    }
    }).catch(function(error){
    	if (error){
    		console.log(error);
    		vm.error = "No stocks match symbol: " + symbol;
    	}
    	}
    );
};

    vm.showSearches = function(){
        console.log("Searches");
        stockDataFactory.searchGetAll().then(function(response){
            console.log(response.data);
            vm.showSearches = response.data;
        }).catch(function(error){
            if(error){
                console.log(error);
                vm.err = "Unable to retrieve searches.";
            }
        });
    };

}   






//     vm.stock.symbol;
//         console.log("just above saveSearch in search-display-controller");
//         stockDataFactory.saveSearch(vm.stock.Symbol).then(function(response) { 
//         console.log("save search bottom of searchcontroller", response);
//     }).catch(function(err) {
// 				console.log(err);
// 			});
//  });
// }
// }

