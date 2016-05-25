app.controller("ItemListCtrl", function($scope, itemStorage){
	$scope.items = [];

	itemStorage.getItemList().then(function(itemCollection){
		console.log(itemCollection);
		$scope.items = itemCollection;
	});

	$scope.itemDelete = function(itemId){
        console.log("itemId", itemId);
        itemStorage.deleteItem(itemId).then(function(response){
            itemStorage.getItemList().then(function(itemCollection){
                $scope.items = itemCollection;
            });
        });
    };
});