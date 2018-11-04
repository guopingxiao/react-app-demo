import * as types from '../constants/actionType'


const initState = {
  inputValue: '',
  todolist:[]
}
// reducer 可以接受 state，但是绝对不能改变state.
// reducer 必须是纯函数，对于固定的输入，必须有确定的输出。而且不能有副作用。
// 也就是索不能依赖于定时器，Ajax请求以及时间等一些参数。对于输入的参数，你只要返回一个输出就行，你不要动输入的state和action，改变了state和action就是有副作用。
const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.INPUT_CHANGE:
      return {
        ...state,
        inputValue: action.value
      }
    
    case types.ADD_ITEM:
      let addState = { ...state }
      addState.todolist.push(addState.inputValue)
      addState.inputValue = ''
      return addState
    
    case types.DELETE_ITEM:
      let deleteState = { ...state }
      deleteState.todolist.splice(action.index, 1)
      return deleteState
    
    default:
      return state
  }
}

export default reducer
