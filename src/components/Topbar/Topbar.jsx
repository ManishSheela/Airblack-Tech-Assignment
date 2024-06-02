import React from "react";
import "./topbar.css";
import { imageList } from "../../util/constants";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Topbar = () => {

	return (
		<div className="topbar-wrapper">
			<div className="image-container">
				{imageList.slice(0, 4)?.map((image, index) => {
					return <img key={index} src={image?.path} alt={image?.name} />;
				})}
			</div>
			<div className="overlay">
				<Logo />
				<p className="presents">PRESENTS</p>
			</div>
		</div>
	);
};

export default Topbar;
