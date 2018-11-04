React TodoList 学习React的基本用法

分支

- react-simple-use
- react-redux-use

## 使用antd 来重新编写todolist

因为目前antd 在后端项目中，用的还是比较多，所以可以直接拿过来用，直接看官方文档就能直接上手了。百度搜antd即可。

使用工具调试
React DevTool
Redux DevTools for debugging application's state changes.

## ActionType

为什么要把actions 的字符串名字 抽离出来放在一个actionTypes 里，因为字符串数据很容易拼错，拼错了还不容易定位问题。抽离出来就是变量了，变量还是比较好维护的，拼错了还会报错。很容易定位到问题。


## 容器组件container和UI组件component

container一般是处理业务逻辑的，不进行UI的渲染，直接引入component传递数据和事件即可，不进行UI的渲染。
UI组件component 一般不处理业务逻辑，只负责拿到数据渲染即可，一般是只有一个render函数；
