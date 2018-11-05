import * as types from '../constants/actionType'
import Axios from 'axios';

/**
 * 这里的action是一个函数哦；
 */
export const getInitAction = () => (dispath) => { 
  let url = '/api/getlist?id=1'
  Axios.get(url).then(res => { 
    let data = res && res.data
    dispath({
      type: types.INIT_TODOLIST,
      data
    })
  })
}
/* createActions */
export const getInputChangeAction = (value) => ({
  type: types.INPUT_CHANGE,
  value
})

export const getAddItemAction = () => ({
  type: types.ADD_ITEM
})

export const getDeleteAction = (index) => ({
  type: types.DELETE_ITEM,
  index
})
