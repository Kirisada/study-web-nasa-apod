import React, { useState, useEffect } from "react";
import "../App.css";
import "bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
	const [photoData, setPhotoData] = useState(null);
	const [startDate, setStartDate] = useState(new Date());
	const yyyy = startDate.getFullYear();
	const MM = startDate.getMonth() + 1;
	const dd = startDate.getDate();
	const strdate = `${yyyy}-${MM}-${dd}`;

	useEffect(() => {
		fetchPhoto();

		async function fetchPhoto() {
			const res = await fetch(
				`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&hd=true&date=${strdate}`
			);
			const data = await res.json();
			setPhotoData(data);
		}
	}, [strdate]);

	if (!photoData) return <div />;

	return (
		<div className="container" style={{paddingTop: "150px"}}>
			<div
				class="card md-6"
				style={{
					height: "80vh",
					width: "70vw",
					background: "rgba(0,0,0,0.5)",
					color: "#ffc045",
					textAlign: "left",
				}}
			>
				<p
					class="display-6"
					style={{
						fontWeight: "bold",
					}}
				>
					Time Machine :{" "}
					<DatePicker
						selected={startDate}
						dateFormat="yyyy-MM-dd"
						onChange={(date) => setStartDate(date)}
						minDate={new Date("1995-06-16")}
						maxDate={new Date()}
						showMonthDropdown
						showYearDropdown
						dropdownMode="select"
						showDisabledMonthNavigation
					/>
				</p>
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
