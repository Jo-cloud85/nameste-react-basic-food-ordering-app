import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import appStore from "../../utils/appStore";

it("Should render Header Component with a login button", () => {
	/* You have to import Provider from react-redux into here and wrap your component to be tested manually. */
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);

	const loginButton = screen.getByRole("button", { name: "Login" });
	expect(loginButton).toBeInTheDocument();
});

it("Should change Login Button to Logout on click", () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);
	const loginButton = screen.getByRole("button", { name: "Login" });

	fireEvent.click(loginButton);

	const logoutButton = screen.getByRole("button", { name: "Logout" });

	expect(logoutButton).toBeInTheDocument();
});

it("Should render Header Component with a Cart items 0", () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);

	const cartItems = screen.getByText("Cart (0 items)");
	expect(cartItems).toBeInTheDocument();
});

it("Should render Header Component with a Cart item", () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);

	/* Instead of strings, you can pass in regex too */
	const cartItems = screen.getByText(/Cart/);
	expect(cartItems).toBeInTheDocument();
});
