import React, { Component, Fragment } from 'react';
import axios from 'axios'
import TodoItem from './TodoItem'
import Toggle from './Toggle'
// import Test from './Test'

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      todolist:[]
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.addBntTap = this.addBntTap.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }
  /* // 在组件即将挂载到页面时触发
  componentWillMount() { 
    console.log('componentWillMount')
  }

  // 非首次渲染后，组件是否要更新呀
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }

  // 组件即将被更新
  componentWillUpdate() { 
    console.log('componentWillUpdate')
  } */

  render() {
    console.log('parent render')
    return (
      <Fragment>
        <Toggle></Toggle>
        <input ref={(input) => { this.input = input}} value={this.state.inputValue} onChange={this.handleInputChange}></input>
        <button onClick={this.addBntTap}>提交</button>
        <ul ref={(ul) => { this.ul = ul}}>
          {
            this.getTodoItems()
          }
        </ul>
        {/* <Test content={this.state.inputValue}></Test>*/}
      </Fragment>
    );
  }
  // 组件被挂载到页面上后，执行
  componentDidMount() { 
    // console.log('componentDidMount')
    axios.get('/api/todolist')
      .then((res) => { 
        if (res.data) { 
          this.setState(() => ({
            todolist:[...res.data]
          }))
        }
      })
      .catch(err => { 
        console.log(err)
      })
  }

  getTodoItems() { 
    let todolist = this.state.todolist
      return todolist.map((item, index) => { 
        return <TodoItem key={index} content={item} index={index} deleteItem={this.deleteItem}/>
      })
  }
  handleInputChange(e) { 
    // let inputValue = e.target.value
    let inputValue = this.input.value
    this.setState(() => ({
      inputValue
    }))
  }

  addBntTap() { 
    if (!this.state.inputValue) { 
      return
    }
    // setState是异步的，所以提供回调用于后续的异步之后的任务。
    this.setState((preState) => (
      {
        todolist:[...preState.todolist, preState.inputValue],
        inputValue: ''
      }), () => { 
        console.log(this.ul.querySelectorAll('li').length)
      })
  }

  deleteItem(index) {
    
    this.setState((preState) => { 
      let todolist = [...preState.todolist]
      todolist.splice(index, 1)
      return {todolist}
    })
  }
}

export default TodoList;
