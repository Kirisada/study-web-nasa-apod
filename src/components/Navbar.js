import { Link } from "react-router-dom";
import Clock from "./Clock";
import "../App.css";
import logo from "../img/nasa_logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function NavBar() {
	return (
		<div
			className="containe-fluid"
			style={{
				width: "100%",
				overflow: "hidden",
			}}
		>
			<nav
				class="navbar navbar-expand-lg"
				style={{ background: "rgba(0,0,0,0.5)"}}
			>
				<Link class="navbar-brand" to="/">
					<img
						src={logo}
						alt=""
						width="90px"
						height="80px"
						style={{ padding: 0, margin: 0 }}
					/>
				</Link>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
					style={{ marginRight: "5%" }}
				>
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<Link class="nav-link" aria-current="page" to="apod">
								Today's Picture!
							</Link>
						</li>
						<li class="nav-item">
							<Link class="nav-link" to="#">
								Calendar
							</Link>
						</li>
						<li class="nav-item">
							<Link class="nav-link" to="/about">
								About
							</Link>
						</li>
					</ul>
					<div style={{ marginRight: "5%" }}>
						<Clock />
					</div>
				</div>
			</nav>
		</div>
	);
}
