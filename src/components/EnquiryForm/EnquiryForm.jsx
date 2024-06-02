import React from "react";
import Button from "../Buttton/Button";
import "./enquiryform.css";

const EnquiryForm = () => {
	return (
		<div className="enquiry-card">
			<form className="enquiry-form">
				<div className="input-field">
					<label>*Enter your name</label>
					<input type="text" placeholder="Eg. Aneesha Mehra" required />
				</div>
				<div className="input-field">
					<label>*Enter your WhatsApp Number</label>
					<div className="whatsapp-input">
						<select>
							<option value="+91">+91</option>
						</select>
						<input
							type="tel"
							id="whatsapp"
							placeholder="Eg. 0000000000"
							required
						/>
					</div>
				</div>
				<div className="input-field">
					<label>*Select your profession</label>
					<select id="profession" required>
						<option value="">Choose the most relevant option</option>
					</select>
				</div>
				<div className="input-field">
					<label>*Select your goal</label>

					<select id="goal" required>
						<option value="">Choose the most relevant option</option>
					</select>
				</div>
				<div className="input-field">
					<label>*Select your city</label>

					<select id="city" required>
						<option value="">Choose the most relevant option</option>
					</select>
				</div>

				<Button buttonName="Submit" />
			</form>
		</div>
	);
};

export default EnquiryForm;
