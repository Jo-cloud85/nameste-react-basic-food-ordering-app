import React from "react";

const Contact = () => {
	return (
		<div>
			<h1 className="font-bold text-3xl p-4 m-4">Contact</h1>
			<form className="flex flex-row gap-4 p-4 m-4">
				<input
					type="text"
					className="border border-black p-2"
					placeholder="name"
				/>
				<input
					type="text"
					className="border border-black p-2"
					placeholder="message"
				/>
				<button
					type="submit"
					className="border border-black p-2 m-2 bg-gray-100 rounded-xl hover:bg-gray-300"
				>
					Submit
				</button>
			</form>
			<p className="p-4 m-4">This is the Contact Us page</p>
		</div>
	);
};

export default Contact;
