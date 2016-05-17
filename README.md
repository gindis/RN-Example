# React Native Example

## 准备

- [Nodejs](https://nodejs.org/)
- [ES6](http://es6.ruanyifeng.com/)
- [React](http://facebook.github.io/react/)
- [React Native](https://facebook.github.io/react-native/)
- [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html)

## 环境安装

- [started](https://facebook.github.io/react-native/docs/getting-started.html#content)

## 对应到前端开发，整个系统结构这样的

- JSX Vs HTML
- CSS-layout Vs Css
- ECMAScript 6 Vs ECMAScript 5
- React Native View Vs DOM

## 优缺点

### 优点

- 无需编译，
- 多数布局代码都是JSX
- 复用React系统
- css-layout布局
- 系统只有js-objc的单向调用
- 点按操作也被抽象成了一组组件
- Debug相当方便
- 相对Hybird app或者Webapp的
	- 不用Webview，彻底摆脱了Webview让人不爽的交互和性能问题
	- 有较强的扩展性，这是因为Native端提供的是基本控件，JS可以自由组合使用
	- 可以直接使用Native原生的「牛逼」动画（在FB Group这个app里面，面板滑出带一点果冻弹动，面板基于某个点展开这种动画随处可见，这种动画用Native code来做小菜一碟，但是用Web来做就难上加难）。
	- 相对于Native app, 可以通过更新远端JS，直接更新app，不过这快成为各家大型Native app的标配了

### 缺点

- 系统仍然（不得不）依赖原生组件暴露出来的组件和方法
- 初次学习成本高，最外层React
- 扩展性仍然远远不如web，也远远不如直接写Native code
- 从Native到Web，要做很多概念转换，势必造成双方都要妥协。
 - 如web要用一套CSS的阉割版，Native通过css-layout拿到最终样式再转换成native原生的表达方式
 - 如iOS的Constraint\origin\Center等属性），再比如动画

## 组件生命周期

- ![](http://gtms01.alicdn.com/tps/i1/TB146ufJVXXXXXHXpXXot9.SFXX-1314-1185.png)

| 生命周期 | 调用次数 | 能否使用 setState() |
| :------|:------|:------|
| constructor | 1 | N |
| componentWillMount | 1 | Y |
| render | >=0 | N |
| componentDidMount | 1 | Y |
| componentWillReceiveProps | >=0 | Y |
| shouldComponentUpdate | >=0 | N |
| componentWillUpdate | >=0 | N |
| componentDidUpdate | >=0 | N |
| componentWillUnmount | 1 | N |

## 动态更新，增量升级方案，...

- 待完善

## 文档

- 官网：http://facebook.github.io/react/
- GITHUB仓库：https://github.com/facebook/react-native
- 中文站：http://reactnative.cn/
- 中文社区：http://bbs.reactnative.cn
- Brew: http://brew.sh/
- 如何评价React Native：https://www.zhihu.com/question/27852694
- RN组件生命周期：http://www.race604.com/react-native-component-lifecycle/
- 解析JSX和Component：http://www.infoq.com/cn/articles/react-jsx-and-component
- ReactNative增量升级方案：https://segmentfault.com/a/1190000004352162
- 如何评价 React Native：https://www.zhihu.com/question/27852694

## 组件

- [react-native-parallax-listview](https://github.com/jaysoo/react-native-parallax-listview)
