import { useRouteError } from "react-router-dom";

const Error = () => {
	// Like other hooks, useRouteError is also a hook, which is a function that returns an object
	const err = useRouteError();

	return (
		<div>
			<h1>Oops!! Something went wrong</h1>
			<h2>
				{err.status}:{err.statusText}
			</h2>
		</div>
	);
};

export default Error;
