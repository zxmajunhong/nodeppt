title: web前端开发工程师
speaker: 马俊鸿
date: 2017-08-04
url: http://ppt.fed.tm
transition: glue
theme: moon



[slide]

# Web视觉体验的缔造者
## Web前端开发工程师

[slide]

[magic data-transition="zoomin"]
# Web的基本发展
---
web1.0=>web2.0

====
## Web1.0(信息共享)
---
Web技术发展的第一阶段就是静态技术阶段，在这个阶段，是以编辑为特征，网站提供给用户的内容是网站编辑处理后的，用户阅读网站提供的内容，这个过程是网站向用户的意向行为。
[note]
页面量少，
在这一阶段还没有前端这一概念，一个网站的前台页面可能就是程序员在写完业务程序后顺手撸出来的。
[/note]

====
## 页面量少，页面复杂度底，美工

====
## Web2.0(信息共建)
---
web技术发展的第二个阶段是动态技术阶段，在Web 1.0时代，Web服务器会返回整个页面或者文档，但随着能AJAX(2005)的出现，使得动态网页逐渐发展，AJAX允许客户端的JavaScript脚本为局部页面提供请求服务，然后可以在无需回到服务器情况下动态刷新部分页面，也就是更新浏览器中的document对象，通常称为DOM。在这个阶段加强了网站与用户之间的互动，网站内容基于用户提供，网站的诸多功能也由用户参与建设，实现了网站与用户的双向互动交流，<span style="color: #ff4c4c">Web2.0不同于Web1.0的最大之处在于它的互动性，用户拥有自己的数据，并完全基于WEB,所有功能都能通过浏览器完成。</span>

====
## 页面视觉效果提升，页面交互变多，页面性能需求增加，页面适应能力

====
## 前端开发工程师诞生了
## 问题来了，什么是前端开发工程师？
[/magic]

[slide]
# 先看看其他各岗位所认为的前端开发工程师是干啥的？
----

+ 人事：魔术师,偏向于界面技术的优化、产品性能的改进 {:&.rollIn}
+ 商务：实现页面、交互效果，将页面做动态展现
+ 运营：页面的美化师；功能的实践者；产品体验的创造者。
+ 产品：无所不能，小功能修改、页面酷炫效果、页面交互效果、上线维护的依靠者、不离不弃
+ 交互：产品框架搭建、交互效果实现、基本动效实现、后台数据交互
+ 设计：运用计算机语言将设计稿完美呈现与用户
+ 后端：设计和后端的桥梁、一群目标是统一宇宙不甘寂寞的人, 长期被地球上渣渣的硬件厂商拖累在各种尺寸... 尺寸.. 尺寸的泥沼, 长期转专注于页面效果, 能为了一个装逼效果, 呕心沥血的工程师
+ 前端：不仅仅是页面的制作，对业务也要有所了解，更在乎与‘工程’二字，前端在一个网站项目中已经是一个独立领域了，如何高效的多人协作？如何保证项目的可维护性与稳定性？如何提高项目的开发质量？

[slide]
# 来看看百度百科的定义：
----
## 前端开发工程师，主要职责是利用(X)HTML/CSS/JavaScript/DOM/等各种Web技术进行产品的界面开发。制作标准优化的代码，并增加交互动态功能，开发JavaScript，同时结合后台开发技术模拟整体效果，进行丰富互联网的Web开发，致力于通过技术改善用户体验。

[slide]
![技能](/assets/web-front/1.jpg)

[slide]
* 他们也许不是产品经理，但是产品的质量几乎都是由他们来决定。
* 他们也许不懂交互设计，但是没人比他们懂交互设计的实现，和每一个细节。
* 他们也许不懂视觉设计，但是没人比他们懂视觉设计如何变为现实。
* 他们也许不懂后台数据库，但是他们其实才是数据的第一消费者。

[slide style="background-image:url('/assets/web-front/bg.jpg')"]

# 我们用双手成就你们的梦想

[slide]

# 那么，日常我们是怎么完成页面的？
## 好的，来举个栗子吧。

[slide]
![原稿](/assets/web-front/demo_yg.jpg)

[slide]
<div class="main">
  <div class="left-img-box" style="width: 640px;">
    <img src="http://img.juxiangyou.com/common/activity/fish-special/2.0/bg1.jpg">
    <img src="http://img.juxiangyou.com/common/activity/fish-special/2.0/bg2.jpg">
    <img src="http://img.juxiangyou.com/common/activity/fish-special/2.0/bg3.jpg">
    <img src="http://img.juxiangyou.com/common/activity/fish-special/2.0/bg4.jpg">
    <img src="http://img.juxiangyou.com/common/activity/fish-special/2.0/bg5.jpg">
  </div>
  <div class="mid-html-box" style="width: 640px">
    ```html
    <div class="bg1"></div>
    <div class="bg2"></div>
    <div class="bg3"></div>
    <div class="bg4"></div>
    <div class="bg5"></div>
    ```
    <a href="http://localhost:8090/step1.html" title="" target="_blank">组合</a>
  </div>
  <div class="right-css-box" style="width: 640px">
    ```css
    .bg1 {
      width: 100%;
      height: 528px;
      background: url(//img.juxiangyou.com/common/activity/fish-special/2.0/bg1.jpg) no-repeat top center;
    }

    .bg2 {
      width: 100%;
      height: 528px;
      background: url(//img.juxiangyou.com/common/activity/fish-special/2.0/bg2.jpg) no-repeat top center;
    }

    .bg3 {
      width: 100%;
      height: 528px;
      background: url(//img.juxiangyou.com/common/activity/fish-special/2.0/bg3.jpg) no-repeat top center;
    }

    .bg4 {
      width: 100%;
      height: 528px;
      background: url(//img.juxiangyou.com/common/activity/fish-special/2.0/bg4.jpg) no-repeat top center;
    }

    .bg5 {
      width: 100%;
      height: 528px;
      background: url(//img.juxiangyou.com/common/activity/fish-special/2.0/bg5.jpg) no-repeat top center;
    }
    ```
  </div>
</div>
<style>
  .main {
    width: 1920px;
    margin-left: -510px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

[slide]
<div class="main">
  <div class="left-img-box" style="width: 840px; display: flex;">
    <img src="http://img.juxiangyou.com/common/activity/fish-special/2.0/static_fish.png">
    <img src="http://img.juxiangyou.com/common/activity/fish-special/2.0/dynamic_fish.png">
  </div>
  <div class="mid-html-box" style="width:540px">
    ```html
    <div class="fish-layer">
      <span class="static-fish fish1"></span>
      <span class="static-fish fish2"></span>
      <span class="static-fish fish3"></span>
      <span class="static-fish fish4"></span>
      <span class="static-fish fish5"></span>
      <span class="static-fish fish6"></span>
      <div class="dynamic-fish dfish1">
        <span class="fish"></span>
      </div>
      <div class="dynamic-fish dfish2">
        <span class="fish"></span>
      </div>
      <div class="dynamic-fish dfish3">
        <span class="fish"></span>
      </div>
      <div class="dynamic-fish dfish4">
        <span class="fish"></span>
      </div>
    </div>
    ```
  </div>
  <a href="" >组合</a>
</div>
<style>
  .main {
    width: 1920px;
    margin-left: -510px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>