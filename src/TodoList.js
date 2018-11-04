import React, { Component } from 'react'
import store from './store/index'

import { Input, Button, List } from 'antd'
import "antd/dist/antd.css"

class TodoList extends Component { 
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  render() { 
    return (
      <div style={{margin:'10px 0 0 10px'}}>
        <Input value={this.state.inputValue} placeholder="todo info" style={{width:'300px'}}/>
        <Button type="primary" style={{marginLeft:'10px'}}>提交</Button>
        <List style={{ marginTop: '10px',width:'300px'}}
          bordered
          dataSource={this.state.todolist}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </div>
    )
  }
}

export default TodoList