import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCKCARD_DATA from "../mocks/resCardMock.json";

it("Should render RestaurantCard component with props data", () => {
	render(<RestaurantCard resData={MOCKCARD_DATA} />);
	const name = screen.getByText("Namaste");
	expect(name).toBeInTheDocument();
});

// Testing for higher-order component
it("Should render RestaurantCard with Promotion label", () => {
	const PromotedResCard = withPromotedLabel(RestaurantCard);

	render(<PromotedResCard resData={MOCKCARD_DATA} />);
	const promoLabel = screen.getByText("Promotion");
	expect(promoLabel).toBeInTheDocument();
});
