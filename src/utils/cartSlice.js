import { createSlice } from "@reduxjs/toolkit";

/* When you create a slice, it returns a cartSlice object which contains actions like addItems etc., and a 
reducer function. 

Do not get confuse. I have this message in appStore.js as well. In appStore.js, the 'reducer' is singular form. 
It is a collective noun consisting of many reducers/slices in the entire Redux store of this app that you are 
building.

In the slice file itself, e.g. cartSlice.js, the 'reducers' in createSlice() is in plural form where it consists
of multiple functions like addItem, removeItem, etc. specific to the slice. When exporting, these reducer 
functions sort of collectively becomes 1 single entity reducer. That's why when exporting, you write 
cartSlice.reducer without the 's'. */

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
	},
	reducers: {
		// we are mutating the states here
		addItem: (state, action) => {
			// Redux Toolkit uses immer.js behind the scenes
			// state.items = [...state.items, action.payload];
			state.items.push(action.payload);
		},
		removeItem: (state) => {
			state.items.pop();
		},
		clearCart: (state) => {
			/* state = [] does not work because this is not modifying the state.
			You are just changing/adding the reference to it. Say, originally state = ["pizza"]. When you write
			state = [], it means you are replacing this entire ["pizza"] with another array object which is []. 
            You are not updating the contents inside the original array.

			UNLESS you write 'return {items: []}'. When you do a return, you are replacing the original ["pizza"]
            from 'state' with []. You are not re-assigning the original 'state' object to another array. */
			state.items.length = 0;
		},
	},
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
