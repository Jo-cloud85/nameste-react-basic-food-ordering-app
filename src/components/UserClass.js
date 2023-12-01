import React from "react";

// class-based component
class UserClass extends React.Component {
	constructor(props) {
		super(props);

		// this.state is a big object that will contain all state variables
		this.state = {
			userInfo: {
				name: "Dummy",
				location: "Default",
				avatar_url: "Default photo",
			},
		};
	}

	// This happens after constructor and render(), this is where API calls are made.
	async componentDidMount() {
		const data = await fetch("https://api.github.com/users/akshaymarch7");
		const json = await data.json();

		this.setState({
			userInfo: json,
		});

		console.log(json);
		console.log("Component Did Mount");
	}

	componentDidUpdate() {
		console.log("Component Did Update");
	}

	// Happens in times when e.g. you go to a new page
	componentWillUnmount() {
		console.log("Component Will Unmount");
	}

	render() {
		const { name, location, avatar_url } = this.state.userInfo;

		return (
			<div className="user-card">
				<img className="avatar" src={avatar_url} />
				<h2>Name: {name}</h2>
				<h3>Location: {location}</h3>
				<h4>Contact: @akshaymarch7</h4>
			</div>
		);
	}
}

export default UserClass;
