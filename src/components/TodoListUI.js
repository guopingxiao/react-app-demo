import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import "antd/dist/antd.css"

class TodoList extends Component { 

  render() { 
    return (
      <div style={{margin:'10px 0 0 10px'}}>
        <Input value={this.props.inputValue}
          placeholder="todo info"
          style={{ width: '300px' }}
          onChange={this.props.handleInputChange} />
        <Button
          type="primary"
          style={{ marginLeft: '10px' }}
          onClick={this.props.handleClick}
        >提交</Button>
        <List style={{ marginTop: '10px',width:'300px'}}
          bordered
          dataSource={this.props.todolist}
          renderItem={(item,index) => (<List.Item onClick={(index) => this.props.deleteItem(index)}>{item}</List.Item>)}
        />
      </div>
    )
  }
  
}

export default TodoList