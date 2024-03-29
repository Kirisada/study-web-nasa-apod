import "./App.css";
import Particles from "react-particles-js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import NasaPhoto from "./components/ApodNasa";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Errorpage from "./components/Errorpage";
import Gallery from "./components/Gallery";

function App() {
	return (
		<div
			className="container-fluid"
			style={{ overflow: "hidden", margin: 0, padding: 0 }}
		>
			<Router>
				<div className="App">
					{/* Background */}
					<Particles
						height="100vh"
						width="100vw"
						style={{}}
						params={{
							particles: {
								number: {
									value: 160,
									density: {
										enable: true,
										value_area: 800,
									},
								},
								color: {
									value: "#ffffff",
								},
								shape: {
									type: "circle",
									stroke: {
										width: 0,
										color: "#000000",
									},
									polygon: {
										nb_sides: 5,
									},
									image: {
										src: "img/github.svg",
										width: 100,
										height: 100,
									},
								},
								opacity: {
									value: 1,
									random: true,
									anim: {
										enable: true,
										speed: 1,
										opacity_min: 0,
										sync: false,
									},
								},
								size: {
									value: 3,
									random: true,
									anim: {
										enable: false,
										speed: 4,
										size_min: 0.3,
										sync: false,
									},
								},
								line_linked: {
									enable: false,
									distance: 150,
									color: "#ffffff",
									opacity: 0.4,
									width: 1,
								},
								move: {
									enable: true,
									speed: 1,
									direction: "none",
									random: true,
									straight: false,
									out_mode: "out",
									bounce: false,
									attract: {
										enable: false,
										rotateX: 600,
										rotateY: 600,
									},
								},
							},
							interactivity: {
								detect_on: "canvas",
								events: {
									onhover: {
										enable: true,
										mode: "bubble",
									},
									onclick: {
										enable: true,
										mode: "repulse",
									},
									resize: true,
								},
								modes: {
									grab: {
										distance: 400,
										line_linked: {
											opacity: 1,
										},
									},
									bubble: {
										distance: 250,
										size: 0,
										duration: 2,
										opacity: 0,
										speed: 3,
									},
									repulse: {
										distance: 400,
										duration: 0.4,
									},
									push: {
										particles_nb: 4,
									},
									remove: {
										particles_nb: 2,
									},
								},
							},
							retina_detect: true,
						}}
					/>
				</div>

				{/* Content */}
				<div className="container-fluid" style={{ padding: 0, margin: 0 }}>
					<NavBar />
					<div className="content">
						<Switch>
							<Route component={Home} path="/" exact />
							<Route component={NasaPhoto} path="/apod" />
							<Route component={About} path="/about" />
							<Route component={Gallery} path="/gallery" />
							<Route component={Errorpage} />
						</Switch>
					</div>
				</div>
			</Router>
		</div>
	);
}

export default App;
