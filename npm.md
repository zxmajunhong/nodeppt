title: npm 模块开发与维护
speaker: 楼教主
date: 2017-07-27
url: http://ppt.fed.tm/md/prettier.md
transition: cards
theme: dark

[slide]

# npm 模块开发与维护
## 演讲者：楼教主


[slide]

* node 模块规范?
* npm 如何工作，如何管理我们的依赖的?
* npm2, npm3, npm5 的主要区别是什么?
* 为什么要添加淘宝镜像？
* 为什么加了镜像有的模块还是不能安装？

----

**上周丢的一个范围，但感觉不够严谨。**



[slide]

1. ## npm 跟 node 是什么关系？
1. ## npm, spm, cnpm, bower 又有什么区别？
1. ## npm, yarn, ied 这些又是啥？


[slide]

## npm: node package manager
----

## npm: a JavaScript package manager
## 一个 JavaScript 包管理器


[slide]

+ **npm** -> node模块管理工具
+ **npmjs.com** -> 全世界最大的node模块平台
+ **spm** -> 阿里基于seajs的静态包管理工具
+ **cnpm** -> 带阿里镜像的npm版本
+ **cnpmjs.org** -> 阿里开源的私有企业npm平台
+ **bower** -> 专注于web端的js模块管理工具及平台
+ **yarn** -> 非死不可推出的更完美的node模块管理方案
+ **ied** -> 15年的npm平行安装方案，后来npm3来了

<br>

**npmjs.com 是模块仓库，npm 是模块管理工具**


[slide]

# 何为 node 模块？
----

## 简单描述就是一段可复用的 js 代码。

> 当然，现在任何东西，任何代码，任何资源，都可以丢到 npm.com/github 上当做node模块，这个最后有时间的话再说。


[slide]

# 模块开发
----

## 基础概念聊完，开始我们的主题


[slide] 

# 浏览器端代码封装为模块
----

### 目标: 封装简单 cookie 操作函数，上传到 npm.com

<br>
### **讨论及操作**

[slide] 

# node端模块开发
----

### 目标: 封装简易 get/post 操作函数，上传到 npm.com

<br>
### **讨论及操作**


[slide] 

# 命令行模块开发 - 全局模块
----

### 目标: 封装获取本机外网IP功能模块，上传到 npm.com

<br>
### **讨论及操作**


[slide]

### 开发并发布一个模块如此简单
### 怎么挑选一个优质的模块呢？


[slide]

《[如何挑选高质量的 Node.js 模块?](https://zhuanlan.zhihu.com/p/25686563)》


[slide]

# 单元测试，集成测试，徽章的添加

* 单元测试之前说过了
* 徽章的添加 其实就是加个图片地址
* 持续集成测试 稍微复杂点，以后单独说吧


[slide]

# 题外话：github 与 npm 的关系。

** leftpad 事件 **


[slide]

# 延伸话题

## 基于组织的模块


[slide]

**最后讨论**

* npm 如何工作，如何管理我们的依赖的?
* npm2, npm3, npm5 的主要区别是什么?
* 为什么要添加淘宝镜像？
* 为什么加了镜像有的模块还是不能安装？


[slide]

## npm 如何工作，如何管理我们的依赖的?

> 就是解析 package.json 中的依赖，处理重复/循环/版本等问题，然后下载tar包解压到本地 node_modules 中。


[slide]

## npm2, npm3, npm5 的主要区别是什么?

1. **npm2** 模块所依赖子模块都安装到自己目录的 node_modules，没有处理复用问题 (非平行安装)
1. **npm3** 平行安装，解析并处理重复/循环/版本等问题，然后平行安装依赖，安装速度提升数倍
1. **npm5** 锁版本，缓存优化，简单说 yarn 有的，他都抄了。


[slide]

## 为什么要添加淘宝镜像？
## 为什么加了镜像有的模块还是不能安装？


[slide]

# END
