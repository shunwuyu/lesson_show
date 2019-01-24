import { ADD, DELETE } from '../constants/todo'

export const add = (data) => {
  return {
    data,
    type: ADD
  }
}

export const del = (id) => {
  return {
    id,
    type: DELETE
  }
}
