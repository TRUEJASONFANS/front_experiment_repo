# Canvas
![canvas](./canvas-opengl-webgl-css-shaders-glsl.png)

Canvas是HTML5新增的组件，它就像一块幕布，可以用JavaScript在上面绘制各种图表、动画等。
没有Canvas的年代，绘图只能借助Flash插件实现，页面不得不用JavaScript和Flash进行交互。有了Canvas，我们就再也不需要Flash了，直接使用JavaScript完成绘制。
一个Canvas定义了一个指定尺寸的矩形框，在这个范围内我们可以随意绘制。

## Canvas 坐标
原点位于左上角, x 轴横向向右,  Y 轴竖向向下为正方向.
<ClientOnly>
    <canvas-example/>
</ClientOnly>
```javascript
  <section>
    <canvas id="canvas1" width="1000" height="440">Canvas not supported</canvas>
  </section>
```
## 贝塞尔曲线
1. 平方贝塞尔曲线: 由两个锚点和一个控制点组成quadraticCruveTo(double cpx, double cpy, double x, double y)
2. 三次方贝塞尔曲线：创建一条代表三次方贝塞尔曲线的路径. bezierCurveTo(double cpx, double cpy, double cp2x, double cp2y, double x, double y)

## Canvas save&&restore
anvas的API提供了两个名叫save()和restore()的方法，用于保存及恢复当前Canvas绘图环境的所有属性。其中save()可以保存当前状态，而restore()可以还原之前保存的状态。这两个方法再绘图中有着重要的作用，比如我们在绘图的时候需要使用多种颜色，颜色需要不时的切换。那么使用save()和restore()方法即可比较方便的实现此功能。
保存的信息包含：
1. 当前的坐标变换（变换矩阵）信息，比如旋转或平移时使用的rotate()和setTransform()方法
2. 当前剪贴区域
3. 图形上下文对象（CanvasRenderingContext2D）的当前属性值

## 坐标变换
1.平移 translate
2.旋转 rotate
3.scale 缩放坐标体系


## 动画
1. requestAnimationFrame 自行决定最佳的帧速率
```javascript
function animate(time) {
    //Update and draw animation objects
    requestAnimationFrame(animate)// sustatin the animation
}
requestAniamtionFrame
```