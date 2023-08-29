import React from "react";
import "./gallery.css";
import HeaderImage from "../../images/header_bg_3.jpg";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

function Gallery() {
	const galleryLength = 15;
	const images = [];
	for (let i = 1; i <= galleryLength; i++) {
		images.push(require(`../../images/gallery${i}.jpg`));
	}
	// console.log(images); //Array of image/

	return (
		<>
		<Navbar />
			<Header title="Our Gallery" image={HeaderImage}>
			Explore our vibrant gallery showcasing moments of dedication, progress, and success shared by our fitness community. Witness the transformations that inspire us all.
			</Header>
			<section className="gallery">
				<div className="container gallery__container">
					{images.map((image, index) => {
						return (
							<article key={index}>
								<img src={image} alt={`GalleryImage ${index + 1}`} />
							</article>
						);
					})}
				</div>
			</section>
		</>
	);
}

export default Gallery;
