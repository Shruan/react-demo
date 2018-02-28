const initialState = {
  name: '',
  city: '',
  num: '111'
}

export default function userInfo (state = initialState, action) {
  switch (action.type) {
    case 'USERINFO_LOGIN':
      for (const obj in state) {
        if (!action.data.hasOwnProperty(obj)) {
          action.data[obj] = state[obj]
        }
      }
      return action.data
    case 'UPDATE_CITYNAME':
      for (const obj in state) {
        if (!action.data.hasOwnProperty(obj)) {
          action.data[obj] = state[obj]
        }
      }
      return action.data
    default:
      return state
  }
}
