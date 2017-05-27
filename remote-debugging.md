title: 移动端远程调试技巧
speaker: yex
date: 2017-05-19
url: http://ppt.fed.tm/md/remote-debugging.md
transition: cards
theme: dark



[slide]

# 移动端远程调试技巧
## 演讲者：yex


[slide]

# 移动端现状
---

+ ## 各种机型层出不穷 {:&.rollIn}
+ ## 即使同一种机型，也有各种版本 android4.1、4.2、ios6、ios7...
+ ## 调试困难，bug往往无法再现



[slide]

# 调试PC端时 我们也许会要求 {:style="margin-top:-2em"}
----

+ ## DOM查看结构 {:&.rollIn}
+ ## CSS实时修改
+ ## 网络请求
+ ## 断点调试
+ ## 性能检测
+ ## 控制台
+ ## ......


[slide]

# 调试移动端时 也许你会发现 {:style="margin-top:-2em"}
----

+ ## 上面说的这些 统统木有~~ {:&.rollIn}


[slide]

# 那么有没有一些比较工具可以解决我们的问题呢
----


[slide]

# 下面是我了解的一些调试方法以及工具
----

+ ## alert、console {:&.rollIn}
+ ## vconsole
+ ## chrome remote devices
+ ## weinre
+ ## 微信web开发者工具


[slide]

# 线上代码真机调试
----

+ ## 调试普通h5 {:&.rollIn}
+ ## 调试webview


[slide]

# 工具的选择与使用
----

[slide]

# chrome remote devices

+ ## 需要数据线，手机端允许usb调试  {:&.rollIn}
+ ## 点击Inspect出现空白（被墙了，翻墙试试）
+ ## android跟ios调试，不完全一样（mac需要使用safari浏览器）
+ ## 调试webview时，需app端允许调试功能
+ ## uc上无法使用此方法


[slide]

# weinre

+ ## 无需数据线，但配置稍嫌麻烦 {:&.rollIn}
+ ## 需要向我们的页面中注入代码
+ ## 支持android跟ios调试，基本一样
+ ## 不支持断点调试
+ ## 安装：npm install -g weinre
+ ## 启动: weinre --boundHost [hostname | ip address |-all-]  --httpPort [port]


[slide]

# 微信web开发者工具

+ ## 内置weinre，不过操作较weinre更简单 {:&.rollIn}
+ ## 不需要向我们的页面注入代码
+ ## 需要查看微信js-sdk的时候选择（比如做微信登陆、微信分享之类功能的时候）


[slide]

# 一些参考资料
----

+ ## https://developers.google.com/chrome-developer-tools/docs/remote-debugging
+ ## https://developers.google.com/web/tools/chrome-devtools/remote-debugging/webviews
+ ## http://www.cnblogs.com/xiaofeixiang/p/4993812.html
+ ## https://github.com/youkinn/remote-debugging
+ ## https://mp.weixin.qq.com/wiki


[slide]


# OVER
----
