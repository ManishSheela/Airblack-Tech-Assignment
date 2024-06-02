import React from "react";

const buttonStyle = {
	background: "linear-gradient(90.32deg, #f56563 0%, #e54988 100%)",
	color: "#fff",
	padding: "10px",
	border: "none",
	borderRadius: "4px",
	width: "100%",
	cursor: "pointer",
	fontFamily: "Proxima Nova",
	fontSize: "14px",
	fontWeight: 700,
};

// .enquiry-form button:hover {
// 	background: linear-gradient(to right, #ff7e00, #ff0055);
// }
const Button = ({ buttonName }) => {
	return <button style={buttonStyle}>{buttonName}</button>;
};

export default Button;
