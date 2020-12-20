import React, { useState, useEffect } from "react";
import "../App.css";
const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
	const [photoData, setPhotoData] = useState(null);

	useEffect(() => {
		fetchPhoto();

		async function fetchPhoto() {
			const res = await fetch(
				`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&hd=true`
			);
			const data = await res.json();
			setPhotoData(data);
		}
	}, []);

	if (!photoData) return <div />;

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
				{photoData.media_type === "image" ? (
					<img
						src={photoData.url}
						alt={photoData.title}
						class="card-img-top"
						style={{
							height: "50vh",
							width: "69.9vw",
						}}
					/>
				) : (
					<iframe
						title="space-video"
						src={photoData.url}
						frameBorder="0"
						gesture="media"
						allow="encrypted-media"
						allowFullScreen
						className="photo"
						style={{ height: "50vh", width: "69.9vw" }}
					/>
				)}
				<div
					class="card-body"
					style={{
						background: "rgba(0,0,0,0.5)",
						"overflow-y": "scroll",
					}}
				>
					<h5 class="card-title">{photoData.title}</h5>
					<p class="card-text">{photoData.explanation}</p>
					<p class="card-text">
						<small class="text-muted">{photoData.date}</small>
					</p>
				</div>
			</div>
		</div>
	);
}
