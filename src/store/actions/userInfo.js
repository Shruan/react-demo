export function loginFunc (data) {
  return {
    type: 'USERINFO_LOGIN',
    data
  }
}

export function updateCityName (data) {
  return {
    type: 'UPDATE_CITYNAME',
    data
  }
}
