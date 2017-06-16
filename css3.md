title: css3动画
speaker: 刘立强
date: 2017-06-15
url: http://ppt.fed.tm
transition: cards

[slide]

# css3动画实战
## 演讲者：刘立强

[slide]

# css3动画的分类
----

1. 过度(transition) 
1. 变形(transform)
1. 动画(animation)

[slide]

#  transition(过度) {:&.flexbox.vleft}
其作用是：平滑的改变CSS的值。无论是点击事件，焦点事件，还是鼠标hover，只要值改变了，就是平滑的，就是动画。

[slide]
#  transition(过度)属性 {:&.flexbox.vleft}
1. transition-property :* //指定过渡的性质，比如transition-property:backgrond 就是指backgound参与这个过渡
1. transition-duration:*//指定这个过渡的持续时间
1. transition-delay:* //延迟过渡时间
1. transition-timing-function:*//指定过渡类型，有ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier

[slide]

#  transform(变形) {:&.flexbox.vleft}
transform指变换，使用过photoshop的人应该知道里面的Ctrl+T自由变换。transform就是指的这个东西，拉伸，压缩，旋转，偏移

[slide]
#  transform(变形)属性 {:&.flexbox.vleft}
matrix(n,n,n,n,n,n)	定义 2D 转换，使用六个值的矩阵。	
matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)	定义 3D 转换，使用 16 个值的 4x4 矩阵。	
translate(x,y)	定义 2D 转换。
translate3d(x,y,z)	定义 3D 转换。	
translateX(x)	定义转换，只是用 X 轴的值。	
translateY(y)	定义转换，只是用 Y 轴的值。	
translateZ(z)	定义 3D 转换，只是用 Z 轴的值。	
scale(x,y)	定义 2D 缩放转换。	
scale3d(x,y,z)	定义 3D 缩放转换。	

[slide]
#  transform(变形)属性 {:&.flexbox.vleft}
scaleX(x)	通过设置 X 轴的值来定义缩放转换。	
scaleY(y)	通过设置 Y 轴的值来定义缩放转换。	
scaleZ(z)	通过设置 Z 轴的值来定义 3D 缩放转换。	
rotate(angle)	定义 2D 旋转，在参数中规定角度。	
rotate3d(x,y,z,angle)	定义 3D 旋转。	
rotateX(angle)	定义沿着 X 轴的 3D 旋转。	
rotateY(angle)	定义沿着 Y 轴的 3D 旋转。	
rotateZ(angle)	定义沿着 Z 轴的 3D 旋转。	
skew(x-angle,y-angle)	定义沿着 X 和 Y 轴的 2D 倾斜转换。	
skewX(angle)	定义沿着 X 轴的 2D 倾斜转换。	
skewY(angle)	定义沿着 Y 轴的 2D 倾斜转换。	
perspective(n)	为 3D 转换元素定义透视视图。

[slide]
#  animation(动画) {:&.flexbox.vleft}
由动画规则和动画属性两本分构成

[slide]
#  animation(动画)属性 {:&.flexbox.vleft}
1. animation-name	规定需要绑定到选择器的 keyframe 名称。。
1. animation-duration	规定完成动画所花费的时间，以秒或毫秒计。
1. animation-timing-function	规定动画的速度曲线。
1. animation-delay	规定在动画开始之前的延迟。
1. animation-iteration-count	规定动画应该播放的次数。
1. animation-direction	规定是否应该轮流反向播放动画。
1. 例：
```css
div
{
    animation:mymove 5s infinite;
    -webkit-animation:mymove 5s infinite; /* Safari 和 Chrome */
}
```

[slide]
#  animation(动画)规则 {:&.flexbox.vleft}

```css
@keyframes mymove
{
    from {top:0px;}
    to {top:200px;}
}
```
