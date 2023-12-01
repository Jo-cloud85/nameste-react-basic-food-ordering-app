import { CDN_URL } from "../utils/constants.js";

const RestaurantCard = (props) => {
	// 1st destructuring - technically you can just pass { resList } directly as the argument, replacing props
	const { resData } = props;

	// 2nd destructuring
	const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
		resData.info;

	return (
		<div
			data-testid="resCard"
			className="res-card p-2 m-4 w-[272px] h-[450px] bg-gray-100 hover:shadow-lg hover:shadow-gray-200"
		>
			<img
				className="res-img w-full h-32 object-cover object-center"
				alt="res-img"
				src={CDN_URL + cloudinaryImageId}
			/>
			<h3 className="font-bold py-4 h-[80px]">{name}</h3>
			<div className="flex flex-col h-[220px] justify-between">
				<h4>{cuisines.join(", ")}</h4>
				<div>
					<p>{avgRating} stars</p>
					<p>{costForTwo}</p>
					<p>{sla.deliveryTime} minutes</p>
				</div>
			</div>
		</div>
	);
};

// Higher Order Component
export const withPromotedLabel = (RestaurantCard) => {
	return (props) => {
		return (
			<div>
				<label className="absolute bg-black text-white px-2 py-1 mx-2 rounded-lg">
					Promotion
				</label>
				<RestaurantCard {...props} />
			</div>
		);
	};
};

export default RestaurantCard;
