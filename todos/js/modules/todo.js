angular.module('todoApp', [])
.controller('TodoListController', function() {
	var todoList = this;
	todoList.todos = [{
		text: 'learn angular',
		done: true
	}, {
		text: 'build an angular app',
		done: false
	}];

	//增加任务清单
	todoList.addTodo = function() {
		console.log(todoList.todoText);
		if(todoList.todoText != '' && todoList.todoText != undefined) {
			todoList.todos.push({
				text: todoList.todoText,
				done: false
			});
			todoList.todoText = '';
		}
	};

	//剩余计算
	todoList.remaining = function() {
		var count = 0;
		angular.forEach(todoList.todos, function(todo) {
			count += todo.done ? 0 : 1;
		});
		return count;
	}

	//存档
	todoList.archive = function() {
		var oldTodos = todoList.todos;
		todoList.todos = [];
		angular.forEach(oldTodos, function(todo) {
			if(!todo.done) {
				todoList.todos.push(todo);
			}
		});
	};

});