import React, { useEffect, useState } from "react";
import Topbar from "../components/Topbar/Topbar";
import icon from "../assets/icon.svg";
import EnquiryForm from "../components/EnquiryForm/EnquiryForm";
import OverlayGrid from "../components/AssetsImage/OverlayGrid";
import certificateImg from "../assets/certificate.png";
import { imageList, offeredService } from "../util/constants";
import Arrow from "../components/CustomArrow/Arrow";

const Homepage = () => {

	return (
		<>
			<Topbar />

			<section>
				<div className="container">
					<div className="tagline">
						Professional Online <br />
						Makeup Course
					</div>

					<div className="certification-container">
						<div className="certification-programme">
							<div className="left-section">
								<img src={icon} alt="Certification Icon" className="icon" />
								<span style={{ fontSize: "12px" }}>
									Certification Programme
								</span>
							</div>
							<div className="right-section">
								<span className="star-icon">⭐</span>
								<span style={{ fontSize: "12px" }}>Rated 4.85/5</span>
							</div>
						</div>
						<ul>
							{offeredService.map((item, index) => (
								<li key={index}>
									<span>✔</span>
									<span>{item}</span>
								</li>
							))}
						</ul>
					</div>

					<EnquiryForm />
				</div>
			</section>

			<OverlayGrid
				heading="Why Should You <br/>
Join Airblack?"
				buttonName="Apply Now"
			/>

			<main>
				<Arrow
					title="Get Certified From <br /> India’s Biggest <br />
				Beauty Platform"
				/>
				<div className="certificateContainer">
					<img
						src={certificateImg}
						alt=""
						style={{ height: "100%", width: "100%" }}
					/>
				</div>
			</main>
			<OverlayGrid
				heading="Join our growing <br/>
community of <br/>
35,000+ alumni"
				buttonName="Apply Now"
				social={true}
			/>
		</>
	);
};

export default Homepage;
