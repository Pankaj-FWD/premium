import React from "react";
import "./plans.css";
import { plans } from "../../data";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../UI/Card";
import Navbar from "../../components/Navbar";

const Plans = () => {
	return (
		<>
		<Navbar />
			<Header title="Transform with Us" image={HeaderImage}>
			Our membership plans are tailored for you, offering the perfect fit for your
			 fitness goals. Join us and let's achieve greatness together.
			</Header>
			<section className="plans">
				<div className="container plans__container">
					{plans.map(({ id, name, desc, price, features }) => {
						return (
							<Card key={id} className="plan">
								<h3>{name}</h3>
								<small>{desc}</small>
								<h1>{`₹ ${price}`}</h1>
								<h2>/mo</h2>
								<h4>Features</h4>
								{features.map(({ feature, available, index }) => {
									return (
										<p key={index} className={available ? "" : "disabled"}>
											{feature}
										</p>
									);
								})}
								<button className="btn lg">Choose Plan</button>
							</Card>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Plans;
