title: 前端体系与我们的产品
speaker: 楼教主
url: http://ppt.fed.tm/md/fed-share.md
transition: slide
theme: dark
files: /assets/fed-share/css/loaders.min.css,/assets/fed-share/css/font-awesome/css/font-awesome.min.css



[slide]

# 前端体系与我们的产品
#### 理想与现实
-----
<br>
### 分享者：楼教主



[slide]

# 几个问题 {:style="margin-top:-2em"}
----

+ ## 前端是什么？ {:onclick="Slide.setIndex(3)"}
+ ## 前端能做什么？ {:onclick="Slide.setIndex(4)"}
+ ## 为什么东哥老是说做不了？ {:onclick="Slide.setIndex(5)"}



[slide]

[magic data-transition="vertical3d"]
## 使用 HTML、CSS、JavaScript 将设计稿做成网页
====
## 这是10年前的前端，现在叫做切图仔
## 也就是p3级别的前端
====
## 比如一个设计被叫做美工一样
====
## 其实我也不知道怎么概括，但你在屏幕上能看到的一切都可以用前端技术实现
====
# Atwood定律 {:onclick="Slide.setIndex(2)"}
----

### Any application that can be written in JavaScript, will eventually be written in JavaScript.
## 任何能用js实现的应用最终一定会用js实现

<br>
<span class="text-success">例如本PPT</span>
[/magic]



[slide]

## 大前端的世界 {:onclick="Slide.setIndex(2)"}
----

+ ### <span class="text-success">pcweb</span>：多页应用 mpa，单页应用 spa
+ ### <span class="text-success">移动web</span>：单页应用 spa 为主
+ ### <span class="text-success">服务端应用</span>：基于nodejs的服务端开发，但不是后端开发
+ ### <span class="text-success">数据可视化</span>：算法+svg/canvas做图形呈现
+ ### <span class="text-success">web动画</span>：基于css3/svg/canvas/webgl做高级动画页面
+ ### <span class="text-success">H5游戏</span>：例如白鹭引擎基于canvas，类似以前flash开发
+ ### <span class="text-success">混合应用</span>：react-native, weex 的各种 Hybrid App
+ ### <span class="text-success">桌面应用</span>：NW.js, Electron, heX 开发各种客户端应用
+ ### <span class="text-success">还有诸如</span>：WebVR，单片机，系统桌面UI，甚至是卫星上...



[slide]

# 虽然现在的前端啥都能做 {:.text-info}
----

1. ## 涉及领域不同，顶多选择几个领域 {:&.moveIn}
2. ## 精力有限，你有多少时间用来学习
3. ## 个人技能往往是公司需求推进的
4. ## 只有小公司需要全栈开发
5. ## 大公司只需要某个领域的王者



[slide]

# 我们的前端所专注的领域

+ ### PC端web开发，常规开发为主
+ ### 移动web开发，基于vue的单页应用为主
+ ### 不包括高级 css3, canvas 动效实现
+ ### 基于 nodejs 服务端服务开发
+ ### 正尝试websocket进行即时方面的东西
+ ### 你能提供实际网站的，我们能扒...
+ ### 在这之外的技术开发时间是无法估量的


[slide]

# 那公司要我们前端何用？


[slide]

# 前后端分离
----

0. ### 开发效率更高，可以和后台并行开发
1. ### 后台只专注业务，提供数据接口即可
2. ### 前端负责渲染模板，呈现数据和交互
3. ### 更好的组织前端项目，利于维护迭代
4. ### 更方便针对前端项目进行优化和调整



[slide]

## 现在理解东哥的苦衷了吧



[slide]

# 我们的交互与设计
----

<div class="zoomIn">
  <h2 class="text-warning">很优秀</h2>
  <h2 class="text-warning">很能干</h2>
  <h2 class="text-warning">棒棒哒</h2>
</div>


 
[slide]

<h1 style="margin-top:-3em;">交互之于前端</h1>
----

[magic data-transition="move"]
+ <span class="text-success">需求方：</span>
+ 我要什么什么功能
+ 我要什么什么效果
+ 我也不知道我要什么

====

+ <span class="text-success">程序员:</span>
+ 一脸蒙逼
+ 二脸蒙逼
+ 全员蒙逼

====

+ <span class="text-success">交互登场:</span>
+ 整理分析需求
+ 梳理流程逻辑
+ 制作交互原型

[/magic]



[slide]

<h1 style="margin-top:-3em;">设计之于前端</h1>
----

[magic data-transition="move"]
<p></p>

====

### 出图来蹂躏前端的人

====

<div class="zoomIn">
  <h4 class="text-warning">那一天，前端终于回想起了曾一度被他们所蹂躏的恐怖</h2>
  <h2 class="text-warning">《进击の设计》</h2>
  <h3 class="text-warning">2D 3D 4D IMAX</h3>
  <h3 class="text-warning">这些都不会上映</h3>
</div>
[/magic]



[slide]

[magic data-transition="move"]
## 交互与设计，我们前端当然是服的，除了东哥
====
## 我们如何更好的一起嗨皮的玩耍呢？
====
## 理想中 - 我们可以做酷炫屌炸天的页面
## 理想中 - 我们可以做帅到没朋友的交互
----
## 是什么导致东哥每次都说这个做不了
[/magic]



[slide]

# 了解我们自己的前端

![ali](/assets/fed-share/images/ali.png)



[slide]

## 拓美大前端
----

+ ### 虽然没人家有背景
+ ### 但我们也是玩node的前端
+ ### 我们也有自己的专注领域
+ ### 我们也有很多开源资源
+ ### 只是大家都不知道而已



[slide]

## 理想的设计稿
----

### 风格，组件，动效，UI 统一



[slide]

# 设计语言
#### 虽然对前端而言只是一个UI框架，但他包含了所有的统一规范 {:.gray2}
----

+ ### Material Design
+ ### [Ant Design](https://ant.design)
+ ### Semantic-UI



[slide]

# 字体图标
----

+ 字体图标，他是字体，矢量的
+ 可以直接 css 控制大小和颜色
+ 普通字体图标，兼容IE6+
+ 多色字体图标，兼容IE9+，基于 symbol
+ 多个图标在一个字体文件中，利于网站加载

<p>
<i class="fa fa-apple"></i>
<i class="fa fa-android"></i>
<i class="fa fa-github"></i>
<i class="fa fa-google"></i>
<i class="fa fa-linux"></i>
<i class="fa fa-css3"></i>
<i class="fa fa-html5"></i>
<i class="fa fa-usd"></i>
<i class="fa fa-pie-chart"></i>
<i class="fa fa-file-video-o"></i>
<i class="fa fa-cog"></i>
</p>

<p class="text-success">
<i class="fa fa-apple"></i>
<i class="fa fa-android"></i>
<i class="fa fa-github"></i>
<i class="fa fa-google"></i>
<i class="fa fa-linux"></i>
<i class="fa fa-css3"></i>
<i class="fa fa-html5"></i>
<i class="fa fa-usd"></i>
<i class="fa fa-pie-chart"></i>
<i class="fa fa-file-video-o"></i>
<i class="fa fa-cog"></i>
</p>



[slide]

# 中文字体问题
----

## 中文字体一直是一个痛点，之前都只能切图

## [字蛛](http://font-spider.org/)
### 让前端直接显示中文字体成为现实



[slide]

# 预设动效
----

[magic data-transition="move"]
### [Animate.css](https://daneden.github.io/animate.css/)
====
### 其他动效，有时间可以给你扒
====
### 但 three.js、d3.js 除外，完全是另一个领域的东西了
[/magic]



[slide]

# Loading动效

<div class="loader" style="height:2em">
  <div class="ball-pulse-sync"><div></div><div></div><div></div></div>
</div>

#### loading 算是单独的一类动效，IE6只能gif，IE9才支持css3 {:.gray2}
----

### <https://connoratherton.com/loaders>
### <http://cssload.net>
### <https://preloaders.net>



[slide]

# 一些js效果demo网站

### <http://runjs.cn>
### <http://jsrun.net>
### <http://codepen.io>



[slide]

# 最后说说页面还原度的问题

元素间距，内边距，




[slide]

# Q&A



[slide]

# END

