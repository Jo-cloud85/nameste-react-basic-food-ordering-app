import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

/* This is where you bring in all your slices like cart slice, user login slice, etc.
Do not get confuse. Here, 'reducer' is singular form.  It is a collective noun consisting of 
many reducers/slices in the entire Redux store of this app that you are building.

In the slice file itself, e.g. cartSlice.js, the 'reducers' is in plural form where it consists
of multiple functions like addItem, removeItem, etc. specific to the slice. */

const appStore = configureStore({
	reducer: {
		cart: cartReducer,
	},
});

export default appStore;
