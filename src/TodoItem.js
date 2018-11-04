import React, { Component } from 'react'
import PropTypes from 'prop-types'
class TodoItem extends Component { 
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this)
  }
  // 组件首次渲染在页面时是不会触发的，只有存在且更新，才会触发这里
  // componentWillReceiveProps() { 
  //   console.log('【child】 componentWillReceiveProps')
  // }
  shouldComponentUpdate(nextProps, nextState) { 
    if (nextProps.content !== this.props.content) {
      return true
     } else { 
      return false
    }
  }
  render() { 
    console.log('【child】 render')
    let { content, test } = this.props
    return <li onClick={this.deleteItem}>{`${test}: ${content}`}</li>
  }
  // componentWillUnmount() { 
  //   console.log('【child】 componentWillUnmount')
  // }

  deleteItem() { 
    let { deleteItem, index } = this.props
    deleteItem(index)
  }
}
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}

TodoItem.defaultProps = {
  test: 'hello'
}
export default TodoItem