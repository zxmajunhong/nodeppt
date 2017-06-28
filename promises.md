title: ES6 Promise 姿势普及
speaker: 楼教主
date: 2017-06-28
url: http://ppt.fed.tm
transition: cards
theme: dark

[slide]

# ES6 Promise 姿势普及
## **楼教主**


[slide]

# Promise 是什么？
----

## 异步任务处理架构，很多语言都有，不止是JS
## **ES2015** 才实现 **Promises/A+** 版本规范


[slide]

[magic data-transition="circle"]
# 从需求出发
----

不论是浏览器还是node上，异步任务无处不在，node端甚至更多。

```js
$.get('/getToken', function(data) {
  $.get('/user', { token: data.token }, function(data) {
    // code
  });
});
```

====

## 假如还有更多的异步回调呢？

====

![回调地狱](/assets/promises/callback-hell.gif)

====

### 当然，这些都只是顺序请求的，一般node端较多
### **来看看并发的情况**

====

```js
$.get('/url1', function(data) { }); // 100-1000ms
$.get('/url2', function(data) { }); // 200-500ms
$.get('/url3', function(data) { }); // 100-2000ms
```
## 我想在全部请求完成后执行功能，怎么破？？ {:.flexbox.vleft}

====

```js
var i = 0;

$.get('/url1', function(data) {  // 100-1000ms
  i++;
  if (i===3) {
    // 执行最终任务
  }
});

$.get('/url2', function(data) { // 200-500ms
  i++;
  if (i===3) {
    // 执行最终任务
  }
});

$.get('/url3', function(data) { // 100-2000ms
  i++;
  if (i===3) {
    // 执行最终任务
  }
});
```

====

![WTF](/assets/promises/wtf.jpg)

[/magic]


[slide]

# 用 Promise 对代码进行优化

jQuery 1.5 开始加入了 Deferred，他类似 Promise。  
jQuery 3.0 正式采用 **Promises/A+** 规范


[slide]

[magic data-transition="circle"]
### 优化前
----

```js
$.get('/getToken', function(data) {
  $.get('/user', { token: data.token }, function (data) {
    // code
  });
});
```

====

### 优化后
----

```js
$.get('/getToken')
  .then(function(data) {
    return $.get('/user', { token: data.token });
  })
  .then(function(data) {
    // code
  });
```


====

### ES6版本
----

```js
$.get('/getToken')
  .then(({ token }) => $.get('/user', { token }))
  .then((data) => {
    // code
  });
```

====

## 看起来貌似没多大差别。。

[/magic]


[slide]

# 在看看并发的优化


[slide]

[magic data-transition="circle"]
### 优化前
----

```js
var i = 0;

$.get('/url1', function(data) {  // 100-1000ms
  i++;
  if (i===3) {
    // 执行最终任务
  }
});

$.get('/url2', function(data) { // 200-500ms
  i++;
  if (i===3) {
    // 执行最终任务
  }
});

$.get('/url3', function(data) { // 100-2000ms
  i++;
  if (i===3) {
    // 执行最终任务
  }
});
```

====

### 优化后
----

```js
$.when($.get('/url1'), $.get('/url2'), $.get('/url3'))
  .then(function (data1, data2, data3) {
    // 最终处理
    console.log('返回数据为', data1, data2, data3);
  });
```

**竟然有这种操作**

====

### 如果你的请求个数不确定的
----

```js
var arr = [];
arr.push($.get('/url1'));
arr.push($.get('/url2'));
arr.push($.get('/url3'));

$.when.apply(null, arr).then(function () {
  // 最终处理
  console.log('返回数据为', arguments);
});
```

[/magic]



[slide]

# 正式进入 Promise 主题
----

* 前面这些例子大家或多或少都用过，只是不知道他是 Promise 而已
* 接下来我们来看看 ES6 中的 Promise


[slide]

# Promise API
----

``` md
# 构造函数
* Promise

# 原型方法
* Promise.prototype.then()
* Promise.prototype.catch()

# 静态方法
* Promise.all()
* Promise.race()
* Promise.reject()
* Promise.resolve()
```

[MDN官网文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)


[slide]

## 异步任务执行流程
----

![](/assets/promises/promises.png)


[slide]

## 执行步骤
----

```js
// 第一步: 实例化 Promise 目前状态为 pending
const promise = new Promise((resolve, reject) => {
  // 回调中的 resolve, reject 分别是成功和失败处理函数
  setTimeout(() => {
    resolve('OK'); // 第二步: 调用 resolve 成功处理句柄后 状态锁定为 fulfilled
  }, 1000);

  setTimeout(() => {
    reject('ERR'); // 这里执行后状态也不会变，因为状态被锁定了
  }, 1100);
});

promise
  .then((data) => { // 第三步: 执行成功回调
    console.log(data); // 输出 OK
  })
  .catch((data) => { // 不执行
    console.log(data);
  })
  .then(() => { // 不管上面执行成功还是失败，这里都执行
    console.log('所有任务完');
  });
```


[slide]

## 执行队列
----

```js
function add(n) {
  console.log(n); // 输出当前值
  return n + 1; // 返回+1
}

Promise.resolve(1) // 直接生成状态为 fulfilled 的 promise 对象
  .then(add) // +1后传给下一个
  .then(() => { // 报错截断当前 then 列表
    throw Error('报错啦');
  })
  .then(add) // 不执行
  .then(add) // 不执行
  .catch((err) => { // 执行错误捕获
    console.log(err.message);
    return 10;
  })
  .then(add) // 继续执行
  .then(add)
  .then(add)
  .catch((err) => {
    console.log(err.message);
  });
```


[slide]

## 错误捕获
----

```js
// 同步的情况
new Promise((resolve, reject) => {
  throw '报错啦';
  // 或者
  // reject('报错啦');
}).catch(console.log);

// 异步的情况
new Promise((resolve, reject) => {
  setTimeout(() => {
    // throw '报错啦'; // 会报错
    reject('报错啦'); // 这样才能正常捕获
  }, 1000);
}).catch(console.log);
```


[slide]

## 直接上例子
----

1. 先从 `/getToken` 获取 token 值
2. 然后并发请求 `/api1`, `/api2`, `/api3`
3. token + api1, api2, api3 的数据作为 `/api4` 的参数请求
4. 最终获取到 api4 的数据


[slide]

## 函数说明
----

```js
// 模拟简单 ajax get 请求方法
function ajaxGet(url, cb, err) {
  const t =  Math.random() * 1000 | 0; // 延迟 0-1000ms
  setTimeout(() => {
    if (t < 900) { // 90% 概率成功回调
      cb('done: ' + url + ' (' + t + 'ms)');
    } else {
      err('err: ' + url + ' (' + t + 'ms)');
    }
  }, t);
};

// Promise 封装
function asyncGet(url) {
  return new Promise((resolve, reject) => {
    ajaxGet(url, resolve, reject);
  });
}

// 异步请求
asyncGet('getToken')
  .then(console.log) // 成功回调
  .catch(console.log) // 错误回调 (不捕获会抛出异常)
```


[slide class="mycode"]

## 非 Promise 的传统情况
----

<style>
.mycode .hljs {
  overflow: auto;
  height: 420px;
}
</style>


```js
ajaxGet('/getToken', (token) => {
  const datas = { token };
  let i = 0;

  // 并发完成回调
  function done() {
    console.log('api4依赖数据', datas);
    ajaxGet('/api4', (data) => {
      console.log('api4返回数据', data);
    }, (err) => {
      console.log(err);
    });
  }

  // 并发任务 api1，api2，api3
  ajaxGet('/api1', (data) => {
    datas['api1'] = data;
    i++;
    if (i === 3) done();
  }, (err) => {
    console.log(err);
  });

  ajaxGet('/api2', (data) => {
    datas['api2'] = data;
    i++;
    if (i === 3) done();
  }, (err) => {
    console.log(err);
  });

  ajaxGet('/api3', (data) => {
    datas['api3'] = data;
    i++;
    if (i === 3) done();
  }, (err) => {
    console.log(err);
  });

}, (err) => {
  console.log(err);
});
```


[slide]

## Promise 登场
----

```js
asyncGet('/getToken')
  .then((token) => {
    let urls = ['/api1', '/api2', '/api3']; // api 地址
    urls = urls.map(it => asyncGet(it)); // 异步函数包装
    urls.unshift(Promise.resolve(token)); // 带上 token 值
    return Promise.all(urls); // 并发处理
  })
  .then((datas) => {
    console.log('api4依赖数据', datas);
    return asyncGet('/api4');
  })
  .then((data) => {
    console.log('api4返回数据', data);
  })
  .catch(console.log); // 统一的错误捕获
```

**这种操作服不？**



[slide]

## 顺带讲讲 Generator



[slide]

[magic data-transition="circle"]
一切要从 tj 大神的 co 模块讲起
====
co 模块利用 Generator 的 yield 特性，实现了 "同步" 处理异步任务
====


```js
// 顺序请求
co(function *() {
  var a = yield Promise.resolve(1);
  var b = yield Promise.resolve(2);
  var c = yield Promise.resolve(3);
  console.log([a, b, c]); // => [1, 2, 3]
}).catch(onerror);

// 并发请求
co(function *() {
  var a = Promise.resolve(1);
  var b = Promise.resolve(2);
  var c = Promise.resolve(3);
  var res = yield [a, b, c]; // 并发的3个任务
  console.log(res); // => [1, 2, 3]
}).catch(onerror);
```

[/magic]


[slide]

## co 的原理
----

假如我们有这么一个函数，我们来实现一个 co 启动器

```js
function* gen() {
  var r1 = yield asyncGet('/url1');
  var r2 = yield asyncGet('/url2');
  var r3 = yield asyncGet('/url3');
  console.log(r1, r2, r3);
}
```

**先定一个小目标**


[slide]

## 实现一个简易 co
----

```js
function co(gen, err) {
  const g = gen(); // 生成迭代对象 (Iterator Object)

  function next(d) {
    const r = g.next(d); // 执行 next 获取结果
    if (!r.done) { // 没有结束就继续执行
      r.value
        .then(next) // 这个是关键，把值传回传
        .catch(err); // 错误捕获
    }
  }

  next();
}
```


[slide]

## 启动我们的 Generator
----

```js
co(function* gen() {
  const r1 = yield asyncGet('/url1');
  const r2 = yield asyncGet('/url2');
  const r3 = yield asyncGet('/url3');
  console.log([r1, r2, r3]);
}, (err) => {
  console.log(err);
});
```

**这代码看起来，，太TM优雅了**

这个不支持并发处理，有兴趣可以自己实现或者看看 co 的实现

koa1 就是基于 co 为核心开发的



[slide class="myblock"]

## 继续，不要停 (ES7 async/await)
----

<style>
.myblock .slide-wrapper {
  display: block;
}
</style>

[magic data-transition="circle"]

```js
(async function() {
  const r1 = await asyncGet('/url1');
  const r2 = await asyncGet('/url2');
  const r3 = await asyncGet('/url3');
  console.log([r1, r2, r3]);
})();
```

**这代码简直要上天啊**

====

```js
(async function() {
  try { // 错误捕获必须用 try catch
    const r1 = await asyncGet('/url1');
    const r2 = await asyncGet('/url2');
    const r3 = await asyncGet('/url3');
    console.log([r1, r2, r3]);
  } catch (err) {
    console.log(err);
  }
})();
```

====

```js
(async function() {
  try { // 错误捕获必须用 try catch
    const urls = ['/url1', '/url2', '/url3'];
    const datas = await Promise.all(urls.map(asyncGet));
    console.log(datas);
  } catch (err) {
    console.log(err);
  }
})();
```

**令人窒息的操作**

[/magic]



[slide]

[magic data-transition="circle"]
### 看完 **Generator+co** 以及 **async/await**
### 是不是觉得 Promise 都很 low ?
====
## 但不要忘记，他们的本质依然是 Promise！！！
[/magic]


[slide]

## pify 模块

```js
const fs = require('fs');
const pify = require('pify');

// Promisify a single function
pify(fs.readFile)('package.json', 'utf8').then(data => {
	console.log(JSON.parse(data).name);
	//=> 'pify'
});

// Promisify all methods in a module
pify(fs).readFile('package.json', 'utf8').then(data => {
	console.log(JSON.parse(data).name);
	//=> 'pify'
});
```

与 **tj** 大神齐名的 **sindresorhus** 用 **80** 多行代码实现 **Promise** 转换



[slide]

## node8 自带 util.promisify 工具

```js
const util = require('util');
const fs = require('fs');

const stat = util.promisify(fs.stat);
stat('.').then((stats) => {
  // Do something with `stats`
}).catch((error) => {
  // Handle the error.
});
```


[slide]

# Q&A



[slide]

# END
