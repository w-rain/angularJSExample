angular.module('app',['ngRoute']).config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/',{
		controller:'mainController',
		template: '\
		<div class="jumbotron">\
			<div class="container">\
			<h1>Hello AngularJS World!</h1>\
			<p>欢迎来到AngularJS的世界，这是测试angular-route的功能的页面.</p>\
			<p><a class="btn btn-primary btn-lg" href="#more/info" role="button">了解更多 »</a></p>\
			</div>\
			</div>\
		'
	})
	.when('/more/:name',{
		controller:'moreController',
		template: '\
		<div class="container">\
			<div class="more">\
				<p class="back"><a class="btn btn-info" href="#/" role="button"> 返回上一级</a></p>\
				<h1>AngularJS 为克服HTML在构建应用上的不足而设计!</h1>\
				<p class="details">\
        AngularJS是为了克服HTML在构建应用上的不足而设计的。HTML是一门很好的为静态文本展示设计的声明式语言，但要构建WEB应用的话它就显得乏力了。所以我做了一些工作（你也可以觉得是小花招）来让浏览器做我想要的事。通常，我们是通过以下技术来解决静态网页技术在构建动态应用上的不足：类库 - 类库是一些函数的集合，它能帮助你写WEB应用。起主导作用的是你的代码，由你来决定何时使用类库。类库有：jQuery等<br>\
			框架 - 框架是一种特殊的、已经实现了的WEB应用，你只需要对它填充具体的业务逻辑。这里框架是起主导作用的，由它来根据具体的应用逻辑来调用你的代码。框架有：knockout、sproutcore等。AngularJS使用了不同的方法，它尝试去补足HTML本身在构建应用方面的缺陷。AngularJS通过使用我们称为标识符(directives)的结构，让浏览器能够识别新的语法。例如：使用双大括号{{}}语法进行数据绑定；使用DOM控制结构来实现迭代或者隐藏DOM片段；支持表单和表单的验证；\
			能将逻辑代码关联到相关的DOM元素上；\
			能将HTML分组成可重用的组件。\
  		</p>\
  		</div>\
  		</div>\
		'
	})
	.otherwise({redirectTo:'/'});
}])

.controller('mainController',function($scope){

})

.controller('moreController',function($scope,$routeParams,$location){
	$scope.name = $routeParams.name;
});