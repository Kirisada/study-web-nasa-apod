import "../App.css";

export default function Errorpage() {
	return (
		<div className="container" style={{paddingTop: "150px"}}>
			<p
				style={{
					fontSize: "5rem",
					"text-shadow": "5px 5px #0a91ab",
					fontWeight: "bold",
				}}
			>
				Error #404<br />
                Not Found 
			</p>
		</div>
	);
}
