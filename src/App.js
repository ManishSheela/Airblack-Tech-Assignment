import React, { useState, useEffect } from "react";
import Homepage from "./pages/Homepage";

const warningMessage = {
	textAlign: "center",
	padding: "20px",
	marginTop: "50px",
	fontSize: "24px",
	color: "#ff0000",
	backgroundColor: "#fff3f3",
	border: "1px solid #ffcccc",
	borderRadius: "8px",
	width: "80%",
	margin: "50px auto",
	boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
};
function App() {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setScreenWidth(window.innerWidth);

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="App">
			{screenWidth > 495 ? (
				<h2 style={warningMessage}>
					Please open on a device with a screen size less than 495px
				</h2>
			) : (
				<Homepage />
			)}
		</div>
	);
}

export default App;
