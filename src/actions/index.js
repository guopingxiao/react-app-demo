import * as types from '../constants/actionType'

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