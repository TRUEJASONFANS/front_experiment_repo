---
sidebar: auto
next: ./react_query.md
---

# React 进阶

## 三大周期
Mounting：已插入真实 DOM
Updating：正在被重新渲染
Unmounting：已移出真实 DOM

## 一些生命周期方法
1. componentWillMount 在渲染前调用,在客户端也在服务端。

2. componentDidMount(在第一次渲染后调用) : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。

3. componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。

4. shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。 
可以在你确认不需要更新组件时使用。

5. componentWillUpdate(第一次渲染时候不调用用):在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。

6. componentDidUpdate 在组件完成更新后即调用。在初始化时不会被调用。

7. componentWillUnmount在组件从 DOM 中移除之前立刻被调用。




### HOC

React的高阶组件主要用于组件之间共享通用功能而不重复代码的模式（也就是达到DRY模式）。

高阶组件实际是一个函数。 HOC函数将组件作为参数并返回一个新的组件。它将组件转换为另一个组件并添加额外的数据或功能。

```jsx
import React from 'react';

const withSecretToLife = (WrappedComponent) => {
  class HOCExample extends React.Component {
    render() {
      return (
        <WrappedComponent
          secretToLife={42}
          {...this.props}
        />
      );
    }
  }
    
  return HOC;
};

export default withSecretToLife;

import React from 'react';
import withSecretToLife from 'components/withSecretToLife';

const DisplayTheSecret = props => (
  <div>
    The secret to life is {props.secretToLife}.
  </div>
);

const WrappedComponent = withSecretToLife(DisplayTheSecret);

export default WrappedComponent;
```
已知secretToLife为42，有一些组件需要共享这个信息，此时创建了SecretToLife的HOC，将它作为prop传递给我们的组件。

此时，WrappedComponent只是DisplayTheSecret的增强版本，允许我们访问secretToLife属性。

### render props
Render Props 的核心思想是，通过一个函数将class组件的state作为props传递给纯函数组件
```javascript
import React from 'react';

const SharedComponent extends React.Component {
  state = {...}
  render() {
    return (
      <div>
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default SharedComponent;

//this.props.render()是由另外一个组件传递过来的。为了使用以上组件，我们可以进行下面的操作：

import React from 'react';
import SharedComponent from 'components/SharedComponent';

const SayHello = () => (
  <SharedComponent render={(state) => (
    <span>hello!,{...state}</span>
  )} />
);

```

[本文节选自](https://www.jianshu.com/p/ff6b3008820a)


## Hook 使你在无需修改组件结构的情况下复用状态逻辑
理解每一次的 Rendering
每一次渲染都有它自己的 Props and State
每一次渲染都有它自己的事件处理函数
每次渲染都有它自己的 Effects
Hook 不能在 class 组件中使用
### 副作用 side effect

### useEffect
基本上90%的情况下,都应该用这个,这个是在render结束后,你的callback函数执行,但是不会block browser painting,算是某种异步的方式吧,但是class的componentDidMount 和componentDidUpdate是同步的,在render结束后就运行,useEffect在大部分场景下都比class的方式性能更好.

1. 多个useEffect 将按在Function Component中的 进队顺序依次执行， 先进先执行
2. useEffect 依赖数组的依赖为浅依赖， 什么叫浅依赖， 即只要该对象指针不变， 则视该对象不变， 如如下示例， 如果有人调用handleAdd,由于只是修改了obj一个域对象，而Obj所指向对象并没有改变，所有依赖数组项并没有变化，所以useEffect不会重新触发调用
```js
export default (props = {}) => {

    const [obj, setObj] = useState({ person: { name: "xxx" } });

    console.log('-----[parent]  re-render----');
    console.log(obj);

    useEffect(() => {
        console.log('-----[parent]  obj changed - useEffect ----');
    }, [obj]);

    const handleAdd = () => {
        const newObj = Object.assign({}, { person: { name: "xxx2" } })
        setObj(newObj);
    }

    return (
        <div>
            <Child onAdd={handleAdd} obj={obj} />
        </div>
    );
}
```

### useLayoutEffect
这个是用在处理DOM的时候,当你的useEffect里面的操作需要处理DOM,并且会改变页面的样式,就需要用这个,否则可能会出现出现闪屏问题, useLayoutEffect里面的callback函数会在DOM更新完成后立即执行,但是会在浏览器进行任何绘制之前运行完成,阻塞了浏览器的绘制.

### useCallback -> Returns a memoized callback.
缓存函数, 缓存函数除非依赖项改变, 提过细化依赖项可恨好避免子组件在非必须要情况下重新渲染。
```js
// parent
export default (props = {}) => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(0);

    const countNumber = useCallback(() => {
        return count + step;
    }, [count, step]);// 如果依赖项由[count, step] 改为[], 则child 一直输出为0，


    const handleSetStep = () => {
        setStep(step + 1);
        setCount(count + step);
    }

    return (
        <div>
            <button onClick={handleSetStep}>set step is : {step} count is : {count}</button>
            <Child countNumber={countNumber}/>
        </div>
    );
}
// child
export default (props = {}) => {

    useEffect(() => {
        console.log('.....')
        console.log(props.countNumber());
    }, [props.countNumber]);

    return (
        <div>
            {props.countNumber()}
        </div>
    );
}
```
### useMemo -> Returns a memoized value
缓存函数, 缓存计算值除非依赖项改变, 提过细化依赖项可恨好避免子组件在非必须要情况下重新渲染。
```js
const myNumber = 5
const answer = useMemo(() => myNumber + 5, [myNumber])
```
将记住结果10

### React.memo
memo(FC, (prevProps, nextProps) => return true);
memo 用来包装一个FC，后接一个刷新判断函数
```js
const isEqual = (prevProps, nextProps) => {
    if (prevProps.number !== nextProps.number) {
        return false;
    }
    return true;
}
export default memo((props = {}) => {
    console.log(`--- memo re-render ---`);
    return (
        <div>
            {/* <p>step is : {props.step}</p> */}
            {/* <p>count is : {props.count}</p> */}
            <p>number is : {props.number}</p>
        </div>
    );
}, isEqual);
```
