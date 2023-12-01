import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import Header from "../Header";
import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart";
import MOCKMENU_DATA from "../mocks/resMenuMock.json";
import appStore from "../../utils/appStore";

global.fetch = jest.fn(() => {
	return Promise.resolve({
		json: () => Promise.resolve(MOCKMENU_DATA),
	});
});

// Yet to break this test up
it("Should Load Restaurant Menu Component", async () => {
	await act(async () =>
		render(
			<BrowserRouter>
				<Provider store={appStore}>
					<Header />
					<RestaurantMenu />
					<Cart />
				</Provider>
			</BrowserRouter>
		)
	);

	const accordianHeader = screen.getByText("Recommended (15)");

	fireEvent.click(accordianHeader);

	const foodItems = screen.getAllByTestId("foodItems");

	expect(foodItems.length).toBe(15);

	expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();

	const addBtns = screen.getAllByRole("button", { name: "Add +" });

	fireEvent.click(addBtns[0]);

	expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

	fireEvent.click(addBtns[1]);

	expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

	expect(screen.getAllByTestId("foodItems").length).toBe(17);

	fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

	expect(screen.getAllByTestId("foodItems").length).toBe(15);

	expect(
		screen.getByText("Cart is empty. Add items to your cart!")
	).toBeInTheDocument();
});
