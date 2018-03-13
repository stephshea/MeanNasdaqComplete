angular.module('meannasdaq').controller('StocksController', StocksController);
function StocksController(stockDataFactory) {
    var vm = this;
    vm.title= 'MEAN Nasdaq App';
    stockDataFactory.stockList().then(function(response) {
        // console.log(response);
        vm.stocks = response.data;
        //response is everything -- data sends only data from stock props on view model
    });
}