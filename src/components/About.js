import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
	return (
		<div>
			<h1>About</h1>
			<p>This is the About Us page</p>
			<User name={"Arkshay Saini (function)"} location={"Dehradun"} />
			<UserClass name={"Arkshay Saini (class)"} location={"Dehradun"} />
		</div>
	);
};

export default About;
