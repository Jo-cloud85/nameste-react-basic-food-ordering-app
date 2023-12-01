import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Cart from "./components/Cart.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
// import Grocery from "./components/Grocery.js"; // no need to import Grocery like this with lazy loading

import UserContext from "./utils/UserContext.js";
import appStore from "./utils/appStore.js";

// Chunking/Code splitting/Lazy loading/Dynamic bundling/On-demand loading - all means similar things
// You can do this for About, Contact page etc.
const Grocery = lazy(() => import("./components/Grocery.js"));

// Rmb, a React component is a function that returns JSX in short
const AppLayout = () => {
	// Very simple logic of authenticating user to illustrate the power of ContextProvider
	const [userName, setUserName] = useState("");

	// authentication
	useEffect(() => {
		// Make an API call and then send username and password. I am just hardcoding the data that
		// should supposedly come from the API for illustration purposes.
		const data = {
			name: "Akshay Saini",
		};
		setUserName(data.name);
	}, []);

	return (
		<Provider store={appStore}>
			{/* By using ContextProvider and passing a value to loggedInUser, you can populated the value 
			in other components. The other components will not be using the default value in the 
			UserContext.js file. See Header.js. And rmb to import UserContext.js in that file. Also, by 
			wrapping my ContextProvider around the entire app in this case, means my loggedInUser value 
			will be available everywhere as long as you import userContext.js in those files. */}
			<UserContext.Provider
				value={{ loggedInUser: userName, setUserName }}
			>
				<div className="app">
					<Header />
					{/* Whenever there is a change in the path, this outlet will be filled with the children 
			according to the path */}
					<Outlet />
				</div>
			</UserContext.Provider>
		</Provider>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/grocery",
				element: (
					// You can pass in Shimmmer UI as fallback also
					<Suspense fallback={<h1>Loading...</h1>}>
						<Grocery />
					</Suspense>
				),
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/restaurants/:resId",
				element: <RestaurantMenu />,
			},
		],
		errorElement: <Error />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />); // This is the syntax, with the < /> that Babel understands
