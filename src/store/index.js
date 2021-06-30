import { createStore, applyMiddleware, combineReducers } from './redux'
// import thunk from 'redux-thunk';

function countReducer (state = 0, action) {
  switch (action.type) {
    case 'add':
      return state.home + action.payload
    case 'minus':
      return state.home - action.payload
    default:
      return 0
  }
}

const store = createStore(combineReducers({home: countReducer}))
// const store = createStore(countReducer)
export default store