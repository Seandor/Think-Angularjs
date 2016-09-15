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