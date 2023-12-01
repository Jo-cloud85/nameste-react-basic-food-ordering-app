import { useState, useContext } from "react";
import { Link } from "react-router-dom"; // Link is like a wrapper over anchor tag

import { LOGO_URL } from "../utils/constants.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";

const Header = () => {
	const [btnName, setbtnName] = useState("Login");

	const onlineStatus = useOnlineStatus();

	const { loggedInUser } = useContext(UserContext);

	// Subscribing to the Redux store using a Selector
	const cartItems = useSelector((store) => store.cart.items);

	return (
		<div className="header flex justify-between p-4 shadow-lg">
			<div className="logo-container">
				<Link to="/">
					<img className="logo w-28" src={LOGO_URL} />
				</Link>
			</div>
			<div className="nav-items font-bold flex items-center">
				<ul className="flex p-4 gap-6 items-center">
					<li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About Us</Link>
					</li>
					<li>
						<Link to="/contact">Contact Us</Link>
					</li>
					<li>
						<Link to="/grocery">Grocery</Link>
					</li>
					<li>
						<Link to="/cart">Cart ({cartItems.length} items)</Link>
					</li>
					<button
						className="login border-2 px-6 py-2 rounded-3xl hover:bg-green-100 hover:border-green-300"
						onClick={() => {
							btnName === "Login"
								? setbtnName("Logout")
								: setbtnName("Login");
						}}
					>
						{btnName}
					</button>
					<li>{loggedInUser}</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
