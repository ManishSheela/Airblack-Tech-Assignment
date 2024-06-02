import React from "react";

const Arrow = ({ title, social }) => {
	return (
		<div className="heading">
			<div className={`arrow ${!social ? `left-arrow` : ""}`}></div>
			<p
				dangerouslySetInnerHTML={{ __html: title }}
				style={{ fontSize: "24px", margin: 0,lineHeight:'34px' }}
			/>

			<div className={`arrow ${!social ? `right-arrow` : ""}`}></div>
		</div>
	);
};

export default Arrow;
