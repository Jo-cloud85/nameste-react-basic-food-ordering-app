import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import RestaurantCard, { withPromotedLabel } from "./RestaurantCard.js";
import ShimmerContainer from "./Shimmer.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";

const Body = () => {
	// Local state variable - super powerful variable
	const [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [searchText, setSearchText] = useState("");

	const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.934533&lng=77.626579"
		);

		const swiggyJsonData = await data.json();

		const restaurantCard = swiggyJsonData?.data?.cards?.find(
			(card) => card.card.card.id === "top_brands_for_you"
		);

		const restaurantData =
			restaurantCard?.card?.card?.gridElements?.infoWithStyle
				?.restaurants;

		// this is for search input
		setFilteredRestaurants(restaurantData);
		// this is for top rated restaurants
		setListOfRestaurants(restaurantData);
	};

	const onlineStatus = useOnlineStatus();

	if (onlineStatus === false)
		return (
			<h1>
				Looks like you are offline. Please check your internet
				connection.
			</h1>
		);

	const { loggedInUser, setUserName } = useContext(UserContext);

	// Conditional Rendering - rendering based on a set of conditions, using ternary operator
	return listOfRestaurants.length === 0 ? (
		<ShimmerContainer />
	) : (
		<div className="body">
			<div className="filter flex items-center">
				<div className="search p-4 m-4">
					<input
						type="text"
						data-testid="searchInput"
						className="search-box border border-solid border-black p-2 m-2"
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
					/>
					<button
						className="px-4 py-2 m-4 bg-green-100 rounded-lg"
						onClick={() => {
							// Filter the restaurant cards and update the UI searchText
							const filteredRestaurants =
								listOfRestaurants.filter((res) =>
									res.info.name
										.toLowerCase()
										.includes(searchText.toLowerCase())
								);
							setFilteredRestaurants(filteredRestaurants);
						}}
					>
						Search
					</button>
				</div>

				<div className="p-4 m-4">
					<button
						className="filter-btn px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
						onClick={() => {
							const filteredList = listOfRestaurants.filter(
								(res) => res.info.avgRating > 4
							);
							setListOfRestaurants(filteredList);
						}}
					>
						Top Rated Restaurants
					</button>
				</div>
				<div className="search">
					<label>UserName: </label>
					<input
						type="text"
						className="search-box border border-solid border-black p-2 m-2"
						value={loggedInUser}
						onChange={(e) => {
							setUserName(e.target.value);
						}}
					/>
				</div>
			</div>
			<p className="px-4 mx-4 font-bold text-2xl">
				Best Food Outlets Near Me
			</p>
			<div className="p-4 res-container flex flex-wrap justify-left">
				{filteredRestaurants.map((restaurant) => (
					<Link
						to={"/restaurants/" + restaurant.info.id}
						key={restaurant.info.id}
					>
						{restaurant.info.aggregatedDiscountInfoV3 ? (
							<RestaurantCardPromoted resData={restaurant} />
						) : (
							<RestaurantCard resData={restaurant} />
						)}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;
