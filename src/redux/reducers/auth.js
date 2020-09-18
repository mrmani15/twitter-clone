import {USER_LOGIN_FAILURE, USER_LOGIN_SUCCESS} from '../constant'
const initalState = {
  isAuthenticated: null,
  loading: true,
  user: null

}

export default function (state = initalState, action){
  const {type, payload} = action

  switch(type){
    case USER_LOGIN_SUCCESS:
      return{
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      }

    case USER_LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        loading: true,
        user: null
      }

    default:
      return state
  }
}