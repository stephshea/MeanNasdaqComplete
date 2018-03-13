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

    vm.stock.symbol;
        console.log("just above saveSearch in search-display-controller");
        stockDataFactory.saveSearch(vm.stock.Symbol).then(function(response) { 
        console.log("save search bottom of searchcontroller", response);
    }).catch(function(err) {
				console.log(err);
			});
 });
}
}

