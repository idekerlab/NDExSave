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
      console.log(state)
      console.log(action)
      console.log(state[action.catagoryName])
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
      console.log(a)
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
