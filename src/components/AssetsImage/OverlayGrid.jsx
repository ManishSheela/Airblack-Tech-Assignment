import React from "react";
import "./overlayGrid.css";
import Button from "../Buttton/Button";
import { featureList, imageList, socialIcons } from "../../util/constants";
import Arrow from "../CustomArrow/Arrow";

const OverlayGrid = ({ heading, buttonName, social = false }) => {
	return (
		<div className="grid-wrapper">
			<div className="grid-container">
				{imageList.map((image, index) => {
					return <img key={index} src={image?.path} alt={image?.name} />;
				})}
			</div>
			<div className="grid-overlay">
				<Arrow title={heading} social={social} />

				{!social && (
					<div className="feature-box">
						{featureList.map((item, index) => (
							<div key={index} className="featureItem">
								<div className="imgBox">
									<img src={item.icon} alt={item.title} />
								</div>
								<p dangerouslySetInnerHTML={{ __html: item?.title }} />
							</div>
						))}
					</div>
				)}
				{social && (
					<div className={`social-icons ${social ? `social-order` : ""}`}>
						{socialIcons?.map((icon, index) => {
							return <img src={icon?.icon} key={index} alt={icon?.name} />;
						})}
					</div>
				)}
				<Button buttonName={buttonName} />
			</div>
		</div>
	);
};

export default OverlayGrid;
