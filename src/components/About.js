import "../App.css";

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
					<h5 class="card-title">About</h5>
					<p class="card-text">Kritsada Lueng-on</p>
				</div>
			</div>
		</div>
	);
}
