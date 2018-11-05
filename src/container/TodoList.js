import React, { Component } from 'react'
import store from '../store/index'
import * as actionCreator from '../actions/index'
import TodoListUI from '../components/TodoListUI'
import "antd/dist/antd.css"

class TodoList extends Component { 
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  render() { 
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        todolist={this.state.todolist}
        handleInputChange={this.handleInputChange}
        handleClick={this.handleClick}
        deleteItem={this.deleteItem}
      ></TodoListUI>
    )
  }

  // 初始化数据
  componentDidMount() { 
    const initAction = actionCreator.getInitAction()
    store.dispatch(initAction)
    /* Axios.get('/api/getlist.json').then(res => { 
      let data = res.data
      store.dispatch({
        type: 'init_list',
        data
      })
    }).catch(err => {
      console.log(err)
     }) */
  }

  // 输入框变化
  handleInputChange(e) { 
    let value = e.target.value
    const action = actionCreator.getInputChangeAction(value)
    store.dispatch(action)
  }

  // 点击增加Item项
  handleClick() { 
    const action = actionCreator.getAddItemAction()
    store.dispatch(action)
  }

  // 点击删除Item项
  deleteItem(index) { 
    const action = actionCreator.getDeleteAction(index)
    store.dispatch(action)
  }

  // 订阅store数据变化
  handleStoreChange() { 
    this.setState(() => store.getState())
  }
}

export default TodoList