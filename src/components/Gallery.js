import React, { Component } from "react";
import "bootstrap";

class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state = { gallery: [] };
	}

	componentDidMount() {
		this.setState({
			gallery: [
				{
					id: 1,
					header: "Most Detailed Image of the Crab Nebula",
					detail:
						"The Crab Nebula is one of the most intricately structured and highly dynamical objects ever observed. The new Hubble image of the Crab was assembled from 24 individual exposures taken with the NASA/ESA Hubble Space Telescope",
					dateCreated: "2005-12-01",
					image:
						"https://images-assets.nasa.gov/image/PIA03606/PIA03606~medium.jpg",
				},
				{
					id: 2,
					header: "Little gem",
					detail:
						"This colourful bubble is a planetary nebula called NGC 6818, also known as the Little Gem Nebula. It is located in the constellation of Sagittarius (The Archer), roughly 6000 light-years away from us. The rich glow of the cloud is just over half a light-year across — humongous compared to its tiny central star — but still a little gem on a cosmic scale. When stars like the Sun enter retirement, they shed their outer layers into space to create glowing clouds of gas called planetary nebulae. This ejection of mass is uneven, and planetary nebulae can have very complex shapes. NGC 6818 shows knotty filament-like structures and distinct layers of material, with a bright and enclosed central bubble surrounded by a larger, more diffuse cloud. Scientists believe that the stellar wind from the central star propels the outflowing material, sculpting the elongated shape of NGC 6818. As this fast wind smashes through the slower-moving cloud it creates particularly bright blowouts at the bubble’s outer layers. Hubble previously imaged this nebula back in 1997 with its Wide Field Planetary Camera 2, using a mix of filters that highlighted emission from ionised oxygen and hydrogen (opo9811h). This image, while from the same camera, uses different filters to reveal a different view of the nebula. A version of the image was submitted to the Hubble’s Hidden Treasures image processing competition by contestant Judy Schmidt.",
					dateCreated: "2015-08-03",
					image:
						"https://images-assets.nasa.gov/image/hubble-finds-a-little-gem_20185002499_o/hubble-finds-a-little-gem_20185002499_o~medium.jpg",
				},
				{
					id: 3,
					header: "Comets Kick up Dust in Helix Nebula",
					detail:
						"This infrared image from NASA Spitzer Space Telescope shows the Helix nebula, a cosmic starlet often photographed by amateur astronomers for its vivid colors and eerie resemblance to a giant eye.",
					dateCreated: "2007-02-12",
					image:
						"https://images-assets.nasa.gov/image/PIA09178/PIA09178~medium.jpg",
				},
				{
					id: 4,
					header: "The Tortured Clouds of Eta Carinae",
					detail:
						"Massive stars can wreak havoc on their surroundings, as can be seen in this new view of the Carina nebula from NASAs Spitzer Space Telescope.",
					dateCreated: "2013-08-23",
					image:
						"https://images-assets.nasa.gov/image/PIA17257/PIA17257~medium.jpg",
				},
				{
					id: 5,
					header: "WISE Captures the Unicorn Rose",
					detail:
						"Unicorns and roses are usually the stuff of fairy tales, but a new cosmic image taken by NASA WISE mission shows the Rosette nebula in the constellation Monoceros, or the Unicorn.",
					dateCreated: "2010-08-25",
					image:
						"https://images-assets.nasa.gov/image/PIA13126/PIA13126~medium.jpg",
				},
				{
					id: 6,
					header: "Cygnus Loop Nebula",
					detail:
						"Wispy tendrils of hot dust and gas glow brightly in this ultraviolet image of the Cygnus Loop nebula, taken by NASA Galaxy Evolution Explorer. The nebula lies about 1,500 light-years away.",
					dateCreated: "2012-03-22",
					image:
						"https://images-assets.nasa.gov/image/PIA15415/PIA15415~medium.jpg",
				},
			],
		});
	}
	render() {
		return (
			<div
				class="container"
				style={{
					width: "100%",
					height: "100vh",
					paddingTop: "150px",
				}}
			>
				<div class="row">
					{this.state.gallery.map((item) => (
						<div class="col-4">
							<div
								class="card mb-3"
								style={{
									backgroundColor: "rgba(0,0,0,0.5)",
									width: "20vw",
									height: "50vh",
									overflow: "scroll",
									textAlign: "left",
								}}
							>
								<img
									src={item.image}
									class="card-img-top"
									alt="..."
									width="20vw"
									height="70%"
								/>
								<div class="card-body">
									<h4 class="card-title" style={{ color: "#ffc045" }}>
										{item.header}
									</h4>
									<hr style={{ color: "#0a91ab", height: "3px" }} />
									<p class="card-text">{item.detail}</p>
									<p class="card-text">
										<small class="text-muted">{item.dateCreated}</small>
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}
export default Gallery;
