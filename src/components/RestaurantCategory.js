import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
	const handleClick = () => {
		setShowIndex();
	};

	// console.log(data);

	return (
		<div>
			{/* Header */}
			<div className="w-5/12 mx-auto my-6 bg-gray-50 shadow-lg p-8 ">
				<div
					className="flex justify-between items-center border-b-2 border-gray-200 pb-4 cursor-pointer"
					onClick={handleClick}
				>
					<p className="font-bold text-lg">
						{data.title} ({data.itemCards.length})
					</p>
					<span> {showItems ? "▲" : "▼"}</span>
				</div>
				{/* Accordion */}
				{showItems && <ItemList items={data.itemCards} />}
			</div>
		</div>
	);
};

export default RestaurantCategory;
