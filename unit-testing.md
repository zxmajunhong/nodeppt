title: 单元测试
speaker: 楼教主
url: http://ppt.fed.tm/md/unit-testing.md
transition: cards
theme: dark



[slide]

# 单元测试
## 演讲者：楼教主




[slide]

# 什么是单元测试
----

* 单元测试(unit testing)，是指对软件中的最小可测试单元进行检查和验证 {:&.moveIn}
* 单元测试(模块测试)是开发者编写的一小段代码，用于检验被测代码的一个很小的、很明确的功能是否正确
* 那些 `TDD BDD FDD` 就不深究了，因为国内流行的是基于 `BDD` 的简化版 `单元测试`




[slide]

# 单元测试对我们项目有何帮助
----

+ 当我们修改项目的时候，增加或减少一些代码的时候总是会担心其他地方是否会受影响。 {:&.moveIn}
+ 就比如之前模板中 `stringUtils` 和 `StringUtils` 的问题导致页面报错。  
+ 还比如强哥提到的 `stringUtils.replaceStar` 方法当用户名少于2位的时候直接加上 `***` 导致其他频道 `--` 的用户名变成了  
  `--***` 的问题。




[slide]

# 单元测试的目标是什么

+ 我们的目标是：没有蛀牙！！！额，不对，没有难维护的代码！ {:&.moveIn}

+ 当然目标应该分阶段，一步到位的话，我们需要花很多时间去写测试
+ 比如第一步，我先把所有路由的单元测试做了，这样保证之后修改功能的时候不会影响之前的路由，可以放心大胆的改。
+ 第二步，接口单元测试，后台接口会挂，会报错，会在json后加上html，这些我们都可以模拟，看看我们的路由在各种情况下的行为是否正常。
+ 第三步，工具方法的测试，保证之后修改功能的时候不会复现之前的老bug。
+ 第四步，前端功能测试(e2e)，，之后再讲，这更麻烦，之前简单提过一次。

+ 做好 1，2，3 步，我们己可以放心大胆的修改代码了。



[slide]

## 热门的单元测试框架
----

![Testing Frameworks](/assets/unit-testing/frameworks.png)



[slide]

## 黄金搭档 mocha + should
----

虽然 TJ 大神离开了 js 界，但他流下的那些依然是 js 的主流。就好比 mocha 让单元测试更简单，should 让断言简化为自然语言，debug 让调试日志分等级而且可以简单的写入到任何存储介质中。

**等等精品数不胜数**

甚至打开一些牛逼的框架，底层源码中都会有他的名字在。





[slide]
# 如何写单元测试

**终于进入正题了**

怎么写，怎么测试，效果是什么样的？

先来看看 [摩卡官网](https://mochajs.org)

[note]
```js
describe('描述，或者叫做测试分组更容易理解', function() {
  it('具体测试描述，比如测试home路由是否正常', function() {
    // 只要这里不抛出错误，这个测试就是成功的。
    // 但我们代码往往不会直接抛出错误啊，怎么破？
  });
});
```

---

```js
describe('内置函数说明', function() {
  before(function() {
    // 在所有 it 测试之前运行
  });
  after(function() {
    // 在所有 it 测试之后运行
  });
  beforeEach(function() {
    // 在每个 it 测试之前运行
  });
  afterEach(function() {
    // 在每个 it 测试之后运行
  });
});
```
[/note]


[slide]

# 引入 should 断言库
----

```js
const should = require('should'); // 引入 should 断言库

describe('工具测试', () => {
  it('测试用过', () => {
    '你好'.should.be.exactly('你好').and.be.a.String();
  });

  it('测试不过', () => {
    // 结果不对 should 会抛出错误，这个测试就不会通过
    '你好'.should.be.exactly('jser').and.be.a.String();
  });
});
```

看例子。。。




[slide]

# 怎么知道哪些代码被测试了哪些没测试
## istanbul 代码覆盖率工具

一个能监测单元测试所运行到的代码并生成html报告的工具

关键词: {:style="text-align:left"}

``` sh
Statements # 语句块
Branches   # 分支
Functions  # 函数
Lines      # 行数
```

**看实例**




[slide]

# 单元测试及代码覆盖率标准

1. 要求所有主要分支必须测试到位 {:&style="width:410px;margin-left:auto;margin-right:auto"}
2. 要求覆盖率在80%
3. 要求所有路由+接口必须测试到
4. 要求异常环境测试保证项目安全
5. ...


[slide]

# 基于测试的自动部署
## 可持续交付方案
----

开启大前端新篇章



[slide]

# END
