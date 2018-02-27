const initialState = {}

export default function userInfo (state = initialState, action) {
  switch (action.type) {
    case 'USERINFO_LOGIN':
      return action.data
    case 'UPDATE_CITYNAME':
      return action.data
    default:
      return state
  }
}
