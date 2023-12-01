import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
	const cartItems = useSelector((store) => store.cart.items);

	const dispatch = useDispatch();

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	return (
		<div className="text-center m-4 p-4">
			<h1 className="text-2xl font-bold">Cart</h1>
			<button
				className="mt-10 px-4 py-2 cursor-pointer border-2 border-black text-black hover:bg-black hover:text-white rounded-2xl"
				onClick={handleClearCart}
			>
				Clear Cart
			</button>
			<div className="w-1/2 m-auto pt-10">
				{cartItems.length === 0 ? (
					<h1>Cart is empty. Add items to your cart!</h1>
				) : (
					<ItemList items={cartItems} />
				)}
			</div>
		</div>
	);
};

export default Cart;
