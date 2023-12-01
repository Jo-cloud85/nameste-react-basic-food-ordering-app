import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCKLIST_DATA from "../mocks/resListMock.json";

// Note that your MOCKLIST_DATA has to be the entire swiggyJsonData json
global.fetch = jest.fn(() => {
	return Promise.resolve({
		json: () => Promise.resolve(MOCKLIST_DATA),
	});
});

it("Should search Restaurant List for coffee text input", async () => {
	await act(async () =>
		render(
			<BrowserRouter>
				<Body />
			</BrowserRouter>
		)
	);

	const cardsBefSearch = screen.getAllByTestId("resCard");
	expect(cardsBefSearch.length).toBe(20);

	const searchBtn = screen.getByRole("button", { name: "Search" });

	const searchInput = screen.getByTestId("searchInput");

	// You can replace "burger" with something else
	fireEvent.change(searchInput, { target: { value: "coffee" } });
	fireEvent.click(searchBtn);

	// assert screen should load the necessary restaurant cards corresponding to the value stated above
	const cardsAftSearch = screen.getAllByTestId("resCard");

	expect(cardsAftSearch.length).toBe(2);
});

it("Should filter Top Rated Restaurants", async () => {
	await act(async () =>
		render(
			<BrowserRouter>
				<Body />
			</BrowserRouter>
		)
	);

	const cardsBefFilter = screen.getAllByTestId("resCard");
	expect(cardsBefFilter.length).toBe(20);

	const topRatedBtn = screen.getByRole("button", {
		name: "Top Rated Restaurants",
	});

	fireEvent.click(topRatedBtn);

	const cardsAftFilter = screen.getAllByTestId("resCard");
	expect(cardsAftFilter.length).toBe(20);
});
