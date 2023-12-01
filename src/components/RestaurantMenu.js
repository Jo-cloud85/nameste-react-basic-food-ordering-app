import { useState } from "react";
import { useParams } from "react-router-dom";

import ShimmerContainer from "./Shimmer.js";

import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";

const RestaurantMenu = () => {
	const [showIndex, setShowIndex] = useState(null);

	const { resId } = useParams();
	const resInfo = useRestaurantMenu(resId);
	if (resInfo === null) return <ShimmerContainer />;

	const { name, cuisines, costForTwoMessage } =
		resInfo?.cards[0]?.card?.card?.info;

	const categories =
		resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
			(c) =>
				c.card?.card?.["@type"] ===
				"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
		);

	const setShowIndexProps = (i) => {
		i === showIndex ? setShowIndex(null) : setShowIndex(i);
	};

	return (
		<div className="menu text-center">
			<h1 className="font-bold my-6 text-2xl">{name}</h1>
			<p className="font-bold text-lg">{cuisines.join(", ")}</p>
			<p>{costForTwoMessage}</p>
			<h2>Menu</h2>
			{/* categories accordions */}
			{categories.map((category, i) => (
				// controlled component
				<RestaurantCategory
					key={i}
					data={category.card?.card}
					showItems={i === showIndex ? true : false}
					setShowIndex={() => setShowIndexProps(i)}
				/>
			))}
		</div>
	);
};

export default RestaurantMenu;
