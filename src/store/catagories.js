import { Map, Set } from 'immutable'

const SELECT       = "SELECT"
const UNSELECT     = "UNSELECT"
const UPDATE_FIELD = "UPDATE_FIELD"
const CLEAR        = "CLEAR"

const defaultState = {
  "Sample 1": Map({
    selected: false,
    fields: {
      "field 1": "",
      "field 2": "",
      "field 3": ""
    }
  }),
  "Sample 2": Map({
    selected: false,
    fields: {
      "field 1": "",
      "field 2": ""
    }
  })
}

export default function catagories(state = defaultState, action) {
  switch(action.type) {
    case SELECT:
      state[action.catagoryName] =  state[action.catagoryName].set('selected', true)
      return state
    case UNSELECT:
      state[action.catagoryName] =  state[action.catagoryName].set('selected', false)
      return state
    case UPDATE_FIELD:
      var a = state[action.catagoryName].update('fields', function(Fs) {
        Fs[action.field] = action.update
        return Fs
      })
      state[action.catagoryName] = a
      return state
    case CLEAR:
      state[action.catagoryName] =  state[action.catagoryName].update('fields', function(Fs) {
        Object.keys(Fs).map((F) => {
          Fs[F] = ""
        })
        return Fs
      })
      return state
    default:
      return state
  }
}
/*
export function fieldsCompleted(catagory) {
  var empty_flag = false
  var done_flag = false
  Object.keys(catagory.fields).map((field) => {
    if (field == "") {
      empty_flag = true
    } else {
      done_flag = true
    }
  })
  if (empty_flag && done_flag) {
    return "some"
  } else (empty_flag) {
    return "none"
  } else {
    return "all"
  }
}
*/
export function select(catagoryName) {
  return {
    type: SELECT,
    catagoryName
  }
}

export function unselect(catagoryName) {
  return {
    type: UNSELECT,
    catagoryName
  }
}

export function updateField(catagoryName, field, update) {
  return {
    type: UPDATE_FIELD,
    catagoryName,
    field,
    update
  }
}

export function clear(catagoryName) {
  return {
    type: CLEAR,
    catagoryName
  }
}
