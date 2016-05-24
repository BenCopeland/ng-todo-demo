app.controller("ItemListCtrl", function($scope, $http, $location, itemStorage){
	$scope.items = [];

	itemStorage.getItemList().then(function(itemCollection){
		console.log(itemCollection);
		$scope.items = itemCollection;
	})

	$scope.itemDelete = function(itemId){
		console.log(itemId);
		$http
			.delete(`https://todo-app6.firebaseio.com/items/${itemId}.json`)
			.success(function(response){
			// console.log(response);
			$scope.items = [];
			getItems();
		});
	};
});