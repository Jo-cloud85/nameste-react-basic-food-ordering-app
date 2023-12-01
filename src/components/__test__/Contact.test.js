import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

// Grouping test cases
describe("Contact Us Page Test Cases", () => {
	test("Should load Contact component", () => {
		render(<Contact />);

		// Querying
		const heading = screen.getByRole("heading");

		// Assertion - very important
		expect(heading).toBeInTheDocument();
	});

	test("Should load button inside Contact component", () => {
		render(<Contact />);
		const button = screen.getByRole("button");
		expect(button).toBeInTheDocument();
	});

	test("Should show text 'Submit' on the button inside Contact component", () => {
		render(<Contact />);
		const button = screen.getByText("Submit");
		expect(button).toBeInTheDocument();
	});

	test("Should show input name inside Contact component", () => {
		render(<Contact />);
		const inputName = screen.getByPlaceholderText("name");
		expect(inputName).toBeInTheDocument();
	});

	test("Should load 2 input boxes inside Contact component", () => {
		render(<Contact />);
		const inputBoxes = screen.getAllByRole("textbox");
		expect(inputBoxes.length).toBe(2);
	});

	// you can write 'it' instead of 'test'. It is just an alias of 'test'
	it("Should load 2 input boxes inside Contact component", () => {
		render(<Contact />);
		const inputBoxes = screen.getAllByRole("textbox");
		expect(inputBoxes.length).not.toBe(3);
	});
});
