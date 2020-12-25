import "../App.css";
import "bootstrap";

export default function About() {
	return (
		<div className="contentApod" style={{ top: "120%" }}>
			<div
				class="card md-6"
				style={{
					height: "80vh",
					width: "70vw",
					background: "rgba(0,0,0,0.5)",
					color: "#ffc045",
				}}
			>
				<div
					class="card-body"
					style={{
						background: "rgba(0,0,0,0.5)",
						"overflow-y": "scroll",
					}}
				>
					<img
						src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.0-9/37047431_1893593780691495_6873324863453396992_n.jpg?_nc_cat=110&ccb=2&_nc_sid=174925&_nc_eui2=AeE9eIYoZViF15ssRoE8GGbngGpd1w_bsdiAal3XD9ux2G0bJRYLY4lDfh4tiNusnPwrZr1390Ex0lnHmjNJmjpF&_nc_ohc=ucShqvo6iWMAX-9L8D_&_nc_ht=scontent.fbkk5-4.fna&oh=b9b47c6815cb12d7782aa618b7d975dc&oe=600BE8BC"
						class="rounded mx-auto d-block"
						alt="..."
					></img>
					<h5 class="card-title">About</h5>
					<p class="card-text">Kritsada Lueng-on</p>
					<p class="card-text">
						Github :{" "}
						<a href="https://github.com/Void-aircoding">
							https://github.com/Void-aircoding
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
