import React, { Component } from 'react'
import store from '../store/index'
import * as actionCreator from '../actions/index'
import { Input, Button, List } from 'antd'
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
      <div style={{margin:'10px 0 0 10px'}}>
        <Input value={this.state.inputValue}
          placeholder="todo info"
          style={{ width: '300px' }}
          onChange={this.handleInputChange} />
        <Button
          type="primary"
          style={{ marginLeft: '10px' }}
          onClick={this.handleClick}
        >提交</Button>
        <List style={{ marginTop: '10px',width:'300px'}}
          bordered
          dataSource={this.state.todolist}
          renderItem={(item,index) => (<List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>)}
        />
      </div>
    )
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