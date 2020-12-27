import "../App.css";
import "bootstrap";
import cat from "../img/cat.png";

export default function About() {
	return (
		<div className="container" style={{paddingTop: "200px"}}>
			<div
				class="card mb-3"
				style={{
					background: "rgba(0,0,0,0.5)",
					color: "#ffc045",
					width: "69vw",
					display: "block",
					textAlign: "center",
				}}
			>
				<div class="row">
					<div class="col-md">
						<img
							src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.0-9/37047431_1893593780691495_6873324863453396992_n.jpg?_nc_cat=110&ccb=2&_nc_sid=174925&_nc_eui2=AeE9eIYoZViF15ssRoE8GGbngGpd1w_bsdiAal3XD9ux2G0bJRYLY4lDfh4tiNusnPwrZr1390Ex0lnHmjNJmjpF&_nc_ohc=ucShqvo6iWMAX-9L8D_&_nc_ht=scontent.fbkk5-4.fna&oh=b9b47c6815cb12d7782aa618b7d975dc&oe=600BE8BC"
							alt=""
							class="img-fluid"
						/>
					</div>
					<div class="col">
						<div class="card-body">
							<h1 class="display-1">About</h1>
							<br />
							<p class="lead">
								Name : Kritsada Lueng-on
								<br />
								Github :{" "}
								<a href="https://github.com/Void-aircoding">
									https://github.com/Void-aircoding
								</a>
								<br />
								<br />
								<img src={cat} alt="" />
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
