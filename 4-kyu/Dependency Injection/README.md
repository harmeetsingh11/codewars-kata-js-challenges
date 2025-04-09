# [Dependency Injection](https://www.codewars.com/kata/5302d655be2a91068b0001fb)

### Difficulty: `4 kyu`

### Tags: `Regular Expressions``Design Patterns` `Object-oriented Programming``Angular`

## Description

Did you hear about Dependency Injection pattern? The main idea of this pattern is that you may have ability to pass dependencies into your function in any order and they will be resolved automatically. Take a look at this:

```js
var myDependentFunc = inject(function (secondDepency, firstDependency) {
  firstDependency();
  secondDepency();
});

myDependentFunc();
```

As you can see we just put some variables into the function's signature and work with them as usualy. But we know nothing about where these variables are located! Let's assume that all dependencies are stored in the single hash object (for instanse 'deps') and the injector function will be sought among 'deps' properties:

```js
var deps = {
  'firstDependency': function () {return 'this is firstDependency';},
  'secondDepency': function () {return 'this is secondDepency';},
};
```

Ok, I hope this is clear. Also, in order to setup DependencyInjector (DI) we need to specify dependency object:

```js
var DI = function (dependency) {
  this.dependency = dependency;
};
```

Your task is create DI.prototype.inject method that will return a new function with resolved dependencies. And don't forget about nested functions. You shouldn't handle them.


