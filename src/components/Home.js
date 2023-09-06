import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css";

const Home = () => {
	return (
		<div data-testid="homepageTest">
			{" "}
			{/* testing id */}
			<Link to={"https://clinic-appointment-backend-2dvo.onrender.com/appointments"}>
				{" "}
				<button className="view-appointment">View appointments</button>{" "}
			</Link>
			{/* link to appointment page */}
			<Link to={"https://clinic-appointment-backend-2dvo.onrender.com/admin-login"}>
				{" "}
				<button className="admin-button">I am an admin</button>{" "}
			</Link>
			{/* link button to admin login */}
		</div>
	);
};

export default Home;
