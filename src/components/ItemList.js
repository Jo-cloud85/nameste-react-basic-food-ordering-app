import { useState } from "react";
import { ITEM_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
	const [showItems, setShowItems] = useState(false);

	const handleClick = () => {
		setShowItems(!showItems);
	};

	const dispatch = useDispatch();

	const handleAddItem = (item) => {
		dispatch(addItem(item));
	};

	return (
		<div className="text-left py-4">
			<ul className="flex flex-col gap-4">
				{items.map((item) => (
					<li
						data-testid="foodItems"
						key={item?.card?.info.id}
						className="border-b-2 border-gray-200"
					>
						<div
							className="font-semibold flex justify-between cursor-pointer"
							onClick={handleClick}
						>
							<span>{item.card.info.name}</span>
							<span> ˅ </span>
						</div>
						<div className="flex flex-row gap-10 pt-4 pb-8">
							<div className="w-5/6">
								<span className="text-sm py-2 text-gray-500">
									{" Rs. "}
									{item.card.info.price / 100}
								</span>
								<p className="text-sm py-4 text-gray-400">
									{item.card.info.description}
								</p>
							</div>
							<div className="relative w-1/6">
								<img
									src={ITEM_URL + item.card.info.imageId}
									className="w-full h-28 object-cover object-center rounded-md"
								/>
								<button
									className="absolute bg-white shadow-sm text-sm text-center pl-2 py-1 inset-x-3 top-24 font-semibold uppercase rounded-md border-green-200 border-2 hover:bg-green-200 active:bg-green-300 cursor-pointer"
									onClick={() => handleAddItem(item)}
								>
									Add +
								</button>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ItemList;
