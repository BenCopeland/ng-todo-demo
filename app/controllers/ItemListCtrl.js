app.controller("ItemListCtrl", function($scope){
	$scope.items = [
		{
			id: 0,
			task: "mow the lawn",
			isCompleted: true,
			dueDate: "12/5/17",
			assignedTo: "greg",
			location: "Zoes House",
			urgency: "low",
			dependencies: "sunshine, clippers, hat, water, headphones"
		},
				{
			id: 1,
			task: "grade quizzes",
			isCompleted: false,
			dueDate: "12/5/17",
			assignedTo: "joe",
			location: "NSS",
			urgency: "high",
			dependencies: "WIFI, tissues, vodka"
		},
				{
			id: 2,
			task: "take a nap",
			isCompleted: false,
			dueDate: "5/21/16",
			assignedTo: "Zoe",
			location: "Zoes House",
			urgency: "medium",
			dependencies: "cat, hammock, pillow"
		}
	];
});