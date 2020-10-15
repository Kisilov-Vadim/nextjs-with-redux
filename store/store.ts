import { createStore, combineReducers } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper';

//redusers
import counter from './reducers/counter/counter';
import posts from './reducers/posts/posts';

const combinedReducer = combineReducers({
  counter,
  posts,
})

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload
    }
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

const initStore = () => {
  return createStore(reducer)
}

export const wrapper = createWrapper(initStore)