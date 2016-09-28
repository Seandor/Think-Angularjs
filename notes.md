### Why frameworks

- Purpose of additional technologies and approaches is to deal with complexity
- Esier to deal with code:
    - Good code organization
    - Updating part of it shouldn't affect other parts
    - Reusable code
    - Testable code

### Why does code get complex

从代码编写层面来说，有以下几个方面会导致代码变得复杂：

- 不良的或不一致的编码风格
- 难以阅读的变量名和函数名
- 没有注释和API文档

但从软件设计的角度来看，很多时候是因为缺乏“High Cohesion & Low Coupling”才使得代码越来越复杂。

#### high cohesion
紧密联系的小的功能块应该放在同一个code boundary。一个功能块应该只做一件事。

#### loose coupling
组件之间保持最小依赖。当你改变一个组件的内容时，不必去改变另一个。

### Model-View-ViewModel

#### Model
Represents and holds raw data

- Some of this data, in some form, may be displayed in the view
- Can also contain logic to retrieve the data from some source
- Contains no logic associated with displaying the model

#### View
User interface

- In a web app, it's just the HTML and CSS
- Only displays the data that it is given
- **Never changes the data**
- Declaratively broadcasts events, but ever handles them

#### ViewModel
Representation of the state of the view
- Holds the data that's displayed in the view
- Responds to view events, aka presentation logic
- Calls other functionality for business logic processing
- Never directly asks the view to display anything (loose coupling)

#### Declarative Binder
Declaratively binds the model of the ViewModel to the view.

The framework does this magic.

### Custom HTML Attributes
Angular正是利用定制的HTML属性实现了那些绑定。详见例子。

### Dependency Injection
Design pattern that implements Inversion of Control.

DI in Angular needs to be minification proof.

2 methods:

- Inline array with function as last element
- Attach $inject property to the function object

### week1 assignment
这是一个悲伤的故事。我只得了80分。完完全全体现出了我的草率和无知以及没有耐心。

我应该多做测试的，不应该因为一点小小的成绩就沾沾自喜。这是很不好的。And be patient.

### Custom Filters
Steps to create custom filters:
Step 1: Define filter factory function.

```
function customFilterFactory() {
    return function (input) {
        // change input
        return changesInput;
    }
}
```

Step 2: Register filter factory with module

```
angular.module('app', [])
.controller('Ctrl', Ctrl)
.filter('custom', customFilterFactory);
```

Step 3: Inject it with nameFilter

```
Ctrl.$inject = ['$scope', 'customFilter'];
function Ctrl($scope, customFilter) {
    var msg = "Some input";
    customFilter(msg);
}
```

### Digest Cycle
Running digest loops until all watchers report that nothing has changed.

Dirty checking: if one property in the watchers has changed, the digest loop will be fired twice, one is to check which property is changed, the other is to make sure nothing is changed(Because sometimes one property change may cause another property change). 

Several ways to set up watchers:

- `$scope.$watch` - don't do this in a controller
- `{{ someProperty }}`
- `<input ...ng-model="someProperty">`

Digest Cycle does not get triggered automatically if events are unaware of Angular. Solution:

- call `$digest` after your custom code
- wrap your custom code inside of `$apply`
- find angular specific service that handles the same functionality. e.g. `$timeout`.

Minimizing the number of live active watchers in watchers list during the digest loop is desirable. There comes with one-time binding.

### 2-way, 1-way, and 1-time binding.
2-way binding(ng-model) means:

- Listener for change on input automatically set up by Angular updates property value on $scope
- Direct update to property value is automatically updated in UI

1-way binding({{property}}) means:

- Direct update to property value is automatically updated in UI

1-time binding({{::property}}) means:

- initialized value of property is automatically updated in UI

### ng-repeat
- `ng-repeat="item in collection"`, where can now be used in interpolation as an item in the collection at particular index of interation.
- ng-repeat exposes a special $index property to the body of its host tag
    - Holds the numeric index of the current item in the loop

#### Filtered ng-repeat
- Array has a special function called filter
    - create new array where each item satisfies some condition of the comparison function passed into the function.
- Angular has a special (built-in) filter called 'filter'
    - Provided a string as 1st argument, it will filter array it's applied to, matching all string items against provided one
- `ng-repeat="item in collection | filter : searchString"`

### Controller As Syntax

- `$scope` is based on prototypal inheritance. (Child controller's `$scope` inherits from parent controller's `$scope`)
- Controller As syntax is `ControllerName as label`
- Angular creates property 'label' on the `$scope`
    - The label is reference to 'this', i.e., instance of Controller
    - Works because controller treats it as a function constructor, (So `this` will bind to the instance of controllor once the controller being created)
- Attach properties to 'this' inside of Controller, not `$scope`, it's easier syntax in HTML and JS without masking occurs.

### Singleton Design Pattern
Restricts object to always having a single instance.

- Each dependent component gets a reference to the same instance
- Multiple controllers injected with a Service will have access to the same service instance, that enables us to share data between different controllers or other components within our application.

### Lazy Instantiation
Only created if an application component declares it as a dependency. If no components in your application are dependent ont this service, it will never get created.

### Custom Service
Custom services instantiated with .service method.
- Singletons (only 1 instance of object exists)
- lazily instantiated (only created if something depends on them)
- .servce('name', function), treats function as a function constructor

### Factory Design Pattern
Central place that produces new objects or functions

- can produce any type of object, not just a singleton
- can be used to produce dynamically customizable services

### Custom Directive
Directive is a marker in HTML that Angular compiles into some behavior.

- Register name of directive using camelCase
- Registered factory function must return a DDO
- With custom directives, out HTML coding becomes reusable and semantically relevant to the actual web app we're building.

### DDO(Directive Definition Object)
The DDO's restrict property determines what AngularJS compiler should look for to detect your custom directive.

Best Practice: Use 'E' for element when directive has content along with possible behavior.
Best Practice: Use 'A' for attribute when directive has no content and only extends the behavior of host element.

Class and comment directives are possible, but not Used.
