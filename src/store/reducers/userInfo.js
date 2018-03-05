const initialState = {
  name: '',
  city: '',
  num: '111'
}

export default function userInfo (state = initialState, action) {
  if (action.data) {
    for (const obj in state) {
      if (!action.data.hasOwnProperty(obj)) {
        action.data[obj] = state[obj]
      }
    }
  }
  switch (action.type) {
    case 'USERINFO_LOGIN':
      return action.data
    case 'UPDATE_CITYNAME':
      return action.data
    default:
      return state
  }
}
