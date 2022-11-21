import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import { usersApi } from './userSlice';

const Store = configureStore({
	reducer: {
		[usersApi.reducerPath]: usersApi.reducer,
		authSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(usersApi.middleware),
} 
);

export default Store;