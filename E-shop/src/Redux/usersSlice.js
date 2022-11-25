import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
	name: 'users',
	initialState: {
    usersDetail: [
        {
            firstName: "Rushi",
            lastName: "Chitte",
            email: "rushi@gmail.com",
            password: "123",
            mobile: "1234567890",
            user: "ADMIN"
        },
        {
            firstName: "Rushikesh",
            lastName: "Chitte",
            email: "rushi123@gmail.com",
            password: "12345",
            mobile: "1234567800",
            user: "USER"
        }
    ],
    activeUser: {},
    userRole: ""
  },
	reducers: {
    userSignIn: (state, { payload }) => {
      const existData = state.usersDetail.find((value) => value.email === payload.email)
      if(existData){
          state.activeUser = existData
          state.userRole = existData.user
      }
    },
    userSignUp: (state, { payload }) => {
      // new Data
      state.usersDetail.push(payload)
      state.activeUser = payload
      state.userRole = "USER"
    }, 
    userLogout: (state, { payload }) => {
    //   localStorage.removeItem("token")
      state.activeUser = {}
      state.userRole = ""
    }
	},
});

export const userRole = state => state.users.userRole
export const users = state => state.users
export const { userSignIn, userLogout, userSignUp } = usersSlice.actions;
export default usersSlice.reducer;