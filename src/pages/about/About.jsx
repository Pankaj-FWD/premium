import React from "react";
import "./about.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import Navbar from "../../components/Navbar";
import { getUserFromLocalStorage } from "../../utills/authUtils";

const About = () => {

	console.log("getUserFromLocalStorage",getUserFromLocalStorage())
	return (
		<>
		<Navbar />
			<Header title="About us" image={HeaderImage}>
			Discover our gym's inspiring journey to becoming a fitness hub that nurtures wellness and transforms lives. Committed to your health, we offer a diverse range of facilities, classes, and programs tailored for your ultimate fitness experience.
			</Header>
			<section className="about__story">
				<div className="container about__story-container">
					<div className="about__section-image">
						<img src='https://i.postimg.cc/mZ0rXYCx/Snapinsta-app-360882000-783523223515626-5281237955705320143-n-1080.jpg' alt="OurStoryImage" />
					</div>
					<div className="about__section-content">
						<h1>Our Story</h1>
						<p>
						Embark on our remarkable journey from a vision to reality. Born out of a passion for fitness and well-being, our story is one of dedication, growth, and the pursuit of helping you achieve your fitness dreams.
						</p>
						<p>
						Discover the evolution of our fitness sanctuary. From humble beginnings to becoming a beacon of health, our story is a testament to our commitment to transforming lives through exercise, community, and unwavering determination.
						</p>
						<h3>
							-Vicky Singh (Owner)
						</h3>
					</div>
				</div>
			</section>

			{/* <section className="about__vision">
				<div className="container about__vision-container">
					<div className="about__section-content">
						<h1>Our Vision</h1>
						<p>
						At the heart of our platform lies a visionary mission—to redefine the fitness landscape through innovation and empowerment. As the dedicated developer of this premium fitness experience, our goal is to elevate wellness journeys worldwide. We're engineering a dynamic digital space where every user's potential is unlocked, setting the stage for a healthier, more vibrant future.
						</p>
						<p>
						"Fusing technical prowess with fitness, I'm crafting an advanced platform intertwining innovation and usability. This digital haven merges fitness and technology, empowering a wellness journey like never before."
						</p>
						<h3>
							-Pankaj Pal (SDE)
						</h3>
					</div>
					<div className="about__section-image">
						<img src={VisionImage} alt="VisionImage" />
					</div>
				</div>
			</section>

			<section className="about__mission">
				<div className="container about__mission-container">
					<div className="about__section-image">
						<img src={MissionImage} alt="VisionImage" />
					</div>
					<div className="about__section-content">
						<h1>Our Mission</h1>
						<p>
						"United by a common purpose, our gym members and team collaborate to foster a culture of wellness. Our mission: To empower each individual with the tools, support, and camaraderie needed to surpass their fitness ambitions."
						</p>
						<h3>
							-Premium Fitness
						</h3>
					</div>
				</div>
			</section> */}
		</>
	);
};

export default About;
