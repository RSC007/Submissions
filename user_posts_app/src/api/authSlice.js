import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
    usersDetail: [],
    activeUser: {}
  }
  ,
	reducers: {
    userSignIn: (state, { payload }) => {
      const existData = state.usersDetail.find((value) => value.email === payload.email)
      return ({ ...state, usersDetail: [...state.usersDetail, existData ? {} : payload], activeUser: existData ? "NotValid" : existData })
    },
    userSignUp: (state, { payload }) => {
      console.log("call", payload, state);
      // new Data
      if(!state.usersDetail.length){
        localStorage.setItem("token", process.env.REACT_APP_AUTH_TOKEN)
        return ({ ...state, usersDetail: [payload], activeUser: payload })
      }else{
        // looking for user Details
        const existData = state.usersDetail.find((value) => value.email === payload.email)
        !existData?.email && localStorage.setItem("token", process.env.REACT_APP_AUTH_TOKEN)
        return ({ ...state, usersDetail: [...state.usersDetail], activeUser: existData?.email ? existData : "UserExist" })
      }
    }, 
    userLogout: (state, { payload }) => {
      localStorage.removeItem("token")
      return ({ ...state, usersDetail: [...state.usersDetail], activeUser: {}})
    }
	},
});
export const { userSignIn, userLogout, userSignUp } = authSlice.actions;
export default authSlice.reducer;