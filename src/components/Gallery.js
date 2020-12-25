import React, { Component } from "react";
import "bootstrap";

class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state = { news: [] };
	}

	componentDidMount() {
		this.setState({
			news: [
				{
					id: 1,
					header: "Weighing in on the Dumbbell Nebula",
					DateCreated: "2011-08-10",
					detail:
						"The Dumbbell nebula, also known as Messier 27, pumps out infrared light in this image from NASA Spitzer Space Telescope. Planetary nebulae are now known to be the remains of stars that once looked a lot like our sun.",
					image: "",
				},
				{
					id: 2,
					header: "Test news 2",
					detail:
						"Test news 2 Details...................................................................................................................................................................................................",
					image: "",
				},
				{
					id: 3,
					header: "Test news 3",
					detail:
						"Test news 3 Details...................................................................................................................................................................................................",
					image: "",
				},
				{
					id: 4,
					header: "Test news 4",
					detail:
						"Test news 4 Details...................................................................................................................................................................................................",
					image: "",
				},
				{
					id: 5,
					header: "Test news 5",
					detail:
						"Test news 5 Details...................................................................................................................................................................................................",
					image: "",
				},
				{
					id: 6,
					header: "Test news 6",
					detail:
						"Test news 6 Details...................................................................................................................................................................................................",
					image: "",
				},
				{
					id: 7,
					header: "Test news 7",
					detail:
						"Test news 7 Details...................................................................................................................................................................................................",
					image: "",
				},
			],
		});
	}
	render() {
		return (
			<div>
				<div class="jumbotron">
					<div class="container">
						<div
							id="carouselExampleInterval"
							class="carousel slide"
							data-bs-ride="carousel"
						>
							<div class="carousel-inner">
								<div class="carousel-item active" data-bs-interval="10000">
									<img
										src="https://images-assets.nasa.gov/image/hubble-sees-the-wings-of-a-butterfly-the-twin-jet-nebula_20283986193_o/hubble-sees-the-wings-of-a-butterfly-the-twin-jet-nebula_20283986193_o~orig.jpg"
										class="d-block w-100"
										style={{ height: "50vh" }}
										alt="..."
									/>
								</div>
								<div class="carousel-item" data-bs-interval="2000">
									<img
										src="https://images-assets.nasa.gov/image/PIA14417/PIA14417~orig.jpg"
										class="d-block w-100"
										style={{ height: "50vh" }}
										alt="..."
									/>
								</div>
								<div class="carousel-item">
									<img
										src="https://images-assets.nasa.gov/image/PIA04216/PIA04216~orig.jpg"
										class="d-block w-100"
										style={{ height: "50vh" }}
										alt="..."
									/>
								</div>
							</div>
							<a
								class="carousel-control-prev"
								href="#carouselExampleInterval"
								role="button"
								data-bs-slide="prev"
							>
								<span
									class="carousel-control-prev-icon"
									aria-hidden="true"
								></span>
								<span class="visually-hidden">Previous</span>
							</a>
							<a
								class="carousel-control-next"
								href="#carouselExampleInterval"
								role="button"
								data-bs-slide="next"
							>
								<span
									class="carousel-control-next-icon"
									aria-hidden="true"
								></span>
								<span class="visually-hidden">Next</span>
							</a>
						</div>
					</div>
					<div style={{ "overflow-x": "scroll", height: "400px" }}>
						<div className="row mt-3">
							{this.state.news.map((item) => (
								<div className="col">
									<div
										className="card"
										style={{
											background: "rgba(0,0,0,0.5)",
											color: "#ffc045",
										}}
									>
										<div
											class="card-body"
											style={{
												"overflow-y": "scroll",
												height: "200px",
												width: "200px",
												textAlign: "center",
												display: "block",
											}}
										>
											<h5 class="card-title">{item.header}</h5>
											<p class="card-text">{item.detail}</p>
											<p class="card-text">
												<small class="text-muted">{item.DateCreated}</small>
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Gallery;
