import { Link } from "react-router-dom";
import React, { Component } from "react";

import Clock from "./Clock";
import "../App.css";
import logo from "../img/nasa_logo.png";
import "bootstrap";

class Navbar extends Component {
	render() {
		return (
			<div class="fixed-top" width="100vw">
				<div
					class="navbar navbar-expand-lg"
					style={{ background: "rgba(0,0,0,0.5)", width: "100%" }}
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
								<Link class="nav-link" to="/apod">
									Today's Picture!
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link" to="/gallery">
									/ Gallery
								</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link" to="/about">
									/ About
								</Link>
							</li>
						</ul>
						<div style={{ marginRight: "5%" }}>
							<Clock />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Navbar;
