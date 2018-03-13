function SearchController(stockDataFactory) {
    var vm = this;
    vm.title= 'MEAN Nasdaq App';
    stockDataFactory.searchList().then(function(response) {
        // console.log(response);
        vm.searches = response.data;
        //response is everything -- data sends only data from stock props on view model
    });
}