title: Prettier
speaker: 楼教主
date: 2017-04-26
url: http://ppt.fed.tm/md/prettier.md
transition: cards
theme: dark



[slide]

# Prettier
## 演讲者：楼教主



[slide]

# Prettier 是什么？
----

### Prettier is an opinionated JavaScript formatter. 
### Prettier 是一个有意思的 JavaScript 格式化工具。

<br>

### [官网](https://github.com/prettier/prettier)

#### **如果仅仅是个格式化工具，那就没必要分享了。**



[slide]

# 他是个插件
----

1. Atom
1. Emacs
1. Vim
1. Visual Studio Code
1. Visual Studio
1. Sublime Text
1. JetBrains系列



[slide]

# 他会覆盖编辑器默认格式化功能
----

### **也就是说不影响你的使用习惯**




[slide]

# 他支持 eslint
----

### **会根据项目的eslint配置对代码进行格式化**

(格式化 + 自动fix) 这才是重点



[slide]

# 项目约束
----

### 不论浏览器还是node端，今后必须加 eslint - airbnb 规范

### 只有规范统一了，才利于今后的维护与重构



[slide]

# 项目初始化
----

```sh
$ npm init -y
$ eslint --init
```

**eslint 会提示让你选择合适的配置** {:style="text-align:left"}

```md
1. Use a popular style guide
2. Airbnb
3. Do you use React? (y/N) n
4. JavaScript
```



[slide]

## 一些实例演示以及老项目的代码review
----

### 用实战来检验 prettier
