# React-Demo Notes
### 父子组件数据传递 props
```javascript
  <Test title="aaa" />
```
#### 子组件数据接收
```javascript
  import PropTypes from 'prop-types'

  // 使用propTypes 接收数据 并定义数据类型
  test.propTypes = {
    title: PropTypes.string.isRequired
  }
```
### 生命周期
- getInitialState
> 初始化组件 state 数据，但是在 es6 的语法中，我们可以使用以下书写方式代替

```javascript
class Hello extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      now: Date.now()
    }
    // 方法的this指向绑定
    this.updateDate = this.updateDate.bind(this)
  }
}
```

- render
> 最常用的hook，返回组件要渲染的模板。

- comopentDidMount
> 组件第一次加载时渲染完成的事件，一般在此获取网络数据。实际开始项目开发时，会经常用到。

- shouldComponentUpdate
> 主要用于性能优化，React 的性能优化也是一个很重要的话题，后面一并讲解。

- componentDidUpdate
> 组件更新了之后触发的事件，一般用于清空并更新数据。实际开始项目开发时，会经常用到。

- componentWillUnmount
> 组件在销毁之前触发的事件，一般用户存储一些特殊信息，以及清理setTimeout事件等。

#### eslint使用 依赖
```json
  "devDependencies": {
    "babel-eslint": "^7.2.3",
    "eslint": "^4.10.0",
    "eslint-config-airbnb": "^16.1.0",
    "eslint-config-standard": "^11.0.0-beta.0",
    "eslint-loader": "^1.9.0",
    "eslint-plugin-html": "^4.0.2",
    "eslint-plugin-import": "^2.8.0",
    "eslint-plugin-jsx-a11y": "^6.0.3",
    "eslint-plugin-node": "^6.0.0",
    "eslint-plugin-promise": "^3.6.0",
    "eslint-plugin-react": "^7.6.1",
    "eslint-plugin-standard": "^3.0.1"
  }
```
