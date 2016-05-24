app.controller("ItemListCtrl", function($scope, $http){
	$scope.items = [];
	var getItems = function(){
		$http.get("https://todo-app6.firebaseio.com/items.json")
		.success(function(itemObject){
			var itemCollection = itemObject;
			// console.log(itemCollection);
			Object.keys(itemCollection).forEach(function(key){
				itemCollection[key].id = key;
				$scope.items.push(itemCollection[key]);
			});
		});
	};
	getItems();

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