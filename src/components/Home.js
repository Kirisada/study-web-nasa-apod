import { Link } from "react-router-dom";
import "../App.css";
import "bootstrap";

export default function Home() {
	return (
		<div className="containe-fluid" style={{ width: "100%" }}>
			<h1
				class="display-1"
				style={{
					"text-shadow": "5px 5px #0a91ab",
					fontWeight: "bold",
					paddingTop: "15%",
					color: "#ffc045",
				}}
			>
				Astronomy Picture of the Day
			</h1>
			<Link
				to="/apod"
				style={{
					color: "#ffc045",
					"font-family": "Space Grotesk",
					fontSize: "50px",
					padding: 0,
					"text-shadow": "3px 2px #0a91ab",
				}}
			>
				Let's go!
			</Link>
		</div>
	);
}
