import { createStore } from 'redux'

import rootReducer from './reducers'

export default function store (initialState) {
  const initStore = createStore(rootReducer, initialState)
  return initStore
}
