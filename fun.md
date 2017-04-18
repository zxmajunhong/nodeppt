title: 有关组件、模块等封装的写法
speaker: 马俊鸿
url: https://github.com/ksky521/nodePPT
transition: cards
date: 20174月18日

[slide]

# 有关组件、模块等封装的写法
## 演讲者：马俊鸿

[slide]

# 前言 {:&.flexbox.vleft}
## 什么是封装？为什么要函数封装？
封装是把彼此相关数据和操作包围起来，抽象成为一个对象，变量和函数就有了归属，想要访问对象的数据只能通过已定义的接口。
---
好处：
---
1. 功能重用;
2. 维护方便;
3. 程式安全性;

[slide]
## 在浏览器端的封装
1. jquery插件的封装
 + 目前我们聚享游项目有所使用的插件(我们自己封装的不包含第三方的)封装风格：
    + jquery.request.js;
    + city-picker.js;
    + ajaxfileupload.js;
    + jquery.page.js;
    + pagination.js
 + 第三方的封装风格：
    + bootstrap-datepicker.js
    + jqueryRotate.2.2.js

[slide]
按照官方的插件开发规范
```js
  (function($){
    //TODO 封装主体内容
  })(jQuery);
```
采用匿名函数的方式来进行封装
+ 1.避免全局依赖
+ 2.避免第三方破坏

封住的主体内容怎么写（怎么统一一下风格）

```js
  var PlugFun = function(el,options){ 
    //TODO 构造函数 做一些初始化操作
  };

  //将一些操作方法绑定到原型链上
  PlugFun.prototype = {
    constructor: PlugFun, //将上面的函数绑定为该对象的构造函数
    //定义一些操作函数
    fun1: function() {
      //dosomething
    },
    fun2: function(args) {
      //dosomething
    }
    ...
  }

```
[slide]
```js
  //暴露到jquery对象上
  $.fn.plugfun = function(option,args){
    return this.each(function(){
      var $this = $(this),
          data = $(this).data('plugfun'),
          options = typeof option == 'object' && option;
      if(!data){
        //如果当前这个对象没有绑定过该插件
        $this.data('plugfun',(data = new PlugFun(this, $.extend({}, $.fn.plugfun.defaults,options))));
      }
      if(typeof option === 'string' && $.isFunction(fn = data[option])){
        //如果传递的是一个字符串参数判断当前这个字符串名字是否是该对象所拥有的方法，如果是则执行该方法
        fn.apply(data,args)
      }
    });
  };

  $.fn.plugfun.defaults = {}; //默认参数配置

  $.fn.plugfun.Constructor = PlugFun; //绑定构造函数

  var PLUGlobal = { //定义一些暴露的函数及参数
    a:1,
    b:function(){}
  }
```
[slide]
2. 公用功能的封装
与jquery插件的封装差不多不过挂靠对像可以到windows对象上
+ common.js里面的公用浮层显示
+ StringUtils.js有关字符串的处理
```js
  var comFun = function() {}; //当作构造函数
  //将一些操作方法绑定到原型链上
  comFun.prototype = {
    constructor: comFun, //将上面的函数绑定为该对象的构造函数
    //定义一些操作函数
    fun1: function() {
      //dosomething
    },
    fun2: function(args || {}) {
      //dosomething
    }
    ...
  }

  comGlobal = {
    a:1,
    b:function(){}
  }

  window.comFun = new comFun();
```

[slide]
## 在node端的封装
在node端的功能函数的封装基本上是当模块来处理，写法上跟浏览器端的功能封装差不多。
```js
  function serFun () {}; 
  serFun.prototype = {
    f1:function(){},
    f2:function(args){},
    ...
  }
```
node使用模块来出来，那么导出就是
```js
  module.exports = new serFun();
```

[slide]
es6有了类的新特性，在node端不用考虑兼容性的问题，所以封装也可以这样写
参考http://blog.csdn.net/blog_szhao/article/details/52058436
```js
  'use strict'
  class A {
    constructor(name){ //构造函数
      this.name = name;
    }
    f1 () {
      //dosomething
    }
    f2 (args) {
      //dosomething
    }
  }
  A.name = ''; //定义静态属性

  //继承的概念
  class B extends A {
    constructor(name,sex){
      this.sex = sex;
      super(name); //必须执行，否者编译报错
      //在子类中的super有三种作用， 第一是作为构造函数直接调用，第二种是作为父类实例， 第三种是在子类中的静态方法中调用父类的静态方法；
    }
    f3(){
      //dosomething
    }
  }
  //这样申明之后B可以调用A里面的f1，f2方法
  //导出
  module.exports = new A();

```

[slide]
#模块化编程
模块化编程一种编程思想，把一些功能当作一个模块来开发,在需要使用哪个的时候就直接加载进来引用
我们在node中所封装的那些方法就是当作模块来封装有些时候我们在node端所写的功能方法也可能在浏览器端使用，那么我们可以在浏览器端所封装的方法加上一些处理，来让他既适应node端也适应浏览器端

[slide]
比如上面所写的在浏览器端的封装公用功能函数可以加上这样的语句
```js
  (function(name,definiton){
    // 检测上下文环境是否为AMD或CMD
    var hasDefine = typeof define === 'function',
        // 检测是否为node环境
        hasExports = typeof module !== 'undefined' && module.exports;

    if (hasDefine) {
        define(definition);
    } else if (hasExports) {
        module.exports = definition();
    } else {
        window.comFun = definition();
    }
  })('comFun',function(){
    return new comFun();
  })
```

[slide]
#函数式编程
什么是函数式编程？根据百度百科的描述，“函数式编程是种编程典范，它将电脑运算视为函数的计算。函数编程语言最重要的基础是 λ 演算（lambda calculus）。而且λ演算的函数可以接受函数当作输入（参数）和输出（返回值）。和指令式编程相比，函数式编程强调函数的计算比指令的执行重要。和过程化编程相比，函数式编程里，函数的计算可随时调用。”

[slide]
看实例
```js
  //阶乘的一般实现
  function factorial(n) {
    if(n == 1){
      return 1;
    }else{
      return factorial(n-1)*n;
    }
  }

  // 阶乘的函数式编程风格实现  
  function mul(a, b){  return a*b; }   
  function dec(x){  return x - 1; }   
  function equal(a, b){  return a==b; }   
    
  function factorial(n) {  
    if (equal(n, 1)) {  
      return 1;  
    } else {  
      return mul(n, factorial(dec(n)));  
    }  
  } 
```
函数柯力化：可以理解为需要反复调用一个方法a()，它的参数中有一个参数在一定的状况下的值不易改变，
每次调用都写很多次未免太过麻烦，而且也体现不出来它描述和解决的一类问题，这种情况下，
为了避免这两个问题，我们就将其中那个不容易改变的参数给固定下来，新生成一个函数来应对
这一类问题。

[slide]
找了几个例子来看看过程式编程过渡到函数式编程
形式一
```js
    var sum = function(x, y) {  
      return x + y;  
    }  
    var square = function(x) {  
      return x * x;  
    }  
    function foo(){  
      return square( sum(2, 3) );  
    }  
    foo();// 25  
```
形式二
```js
  var sum = function(x, y) {  
    return x + y;  
  }  
  var square = function(x) {  
    return x * x;  
  }  
  function foo(f, g){  
    return f( g(2, 3) );  
  }  
  foo(square, sum);// 25 
```
[slide]
形式三
```js
  var sum = function(x, y) {  
    return x + y;  
  }  
  var square = function(x) {  
    return x * x;  
  }  
  function foo(f, g){  
    return function(){  
      var num1 = arguments[0];  
      var num2 = arguments[1];  
      console.log(num1, num2);// 2 3  
      var temp = g(num1, num2);  
      console.log(temp);// 5  
      return f(temp);  
    };  
  }  
  var myfunc = foo(square, sum);  
  myfunc(2, 3);// 25
```
形式四
```js
      var sum = function(x, y) {  
        return x + y;  
      }  
      var square = function(x) {  
        return x * x;  
      }  
      function foo(f, g){  
        return function(){  
          var temp = g.apply(null, arguments);  
          return f(temp);  
        };  
      }  
      var myfunc = foo(square, sum);  
      myfunc(2, 3);// 25  
```
[slide]
总结:模块化编程还是函数式编程？
