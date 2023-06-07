import { createSlice } from '@reduxjs/toolkit'
import { loginServices } from '../../services/loginServices';
import { ACCESS_TOKEN, USER_LOGIN } from '../../util/settings/config';

let usLogin
if(localStorage.getItem(USER_LOGIN)){
  usLogin = JSON.parse(localStorage.getItem(USER_LOGIN))
}
const initialState = {
      userLogin: usLogin
}

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
      login: (state, action) => {
        state.userLogin = action.payload
        localStorage.setItem(USER_LOGIN, JSON.stringify( action.payload))
        localStorage.getItem(ACCESS_TOKEN, action.payload.accessToken)
        console.log(localStorage.getItem(ACCESS_TOKEN))
      }
  }
});

export const { login } = loginSlice.actions

export default loginSlice.reducer

export const callApiLogin = (values)=>{
  // console.log(values)
  return  async (dispatch) =>{
    try {
        const result = await loginServices.login(values)
        console.log(result)
        dispatch(login(result.data.content))
    } catch (error) {
        console.log(error)
    }
  }
}