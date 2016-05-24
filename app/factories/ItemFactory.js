"use strict";

app.factory("itemStorage", function($q, $http){
	var getItemList = function(){
		let items = [];
		return $q(function(resolve, reject){
			$http.get("https://todo-app6.firebaseio.com/items.json")
			.success(function(itemObject){
				var itemCollection = itemObject;
				Object.keys(itemCollection).forEach(function(key){
					itemCollection[key].id = key;
					items.push(itemCollection[key]);
				})
				resolve(items);
			})
			.error(function(error){
				reject(error);
			});
			// items = [];      //added post, fix repeat
		});
	};

	return {getItemList:getItemList}

});