import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
	return (
		<footer>
			<div className="container footer__container">
				<article>
					<Link to="/" className="logo">
						<img src={Logo} alt="Footer Logo" />
					</Link>
					<p>
					Experience excellence at Premium Fitness. Our dedicated team, state-of-the-art facilities, and vibrant community 
					are here to elevate your fitness journey. Join us today and unlock your potential
					</p>
					<div className="footer__socials">
					<a href="https://api.whatsapp.com/send?phone=7317826455" target="_blank" rel="noreferrer noopener">
            <FaWhatsapp />
          </a>
						<a
							href="https://www.facebook.com/people/Priyank-Singh/pfbid0nt114CGqznw2BbiAENc1rPG5k2NxbkAJ1wXS54GtPHk9ErGVo77ba5h4fNF9Co5Dl/?mibextid=2JQ9oc"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaFacebookF />
						</a>
						<a
							href="https://twitter.com/Priyank71466531"
							target="_blank"
							rel="noreferrer noopener"
						>
							<AiOutlineTwitter />
						</a>
						<a
							href="https://www.instagram.com/premiumfitness_07"
							target="_blank"
							rel="noreferrer noopener"
						>
							<AiFillInstagram />
						</a>
					</div>
				</article>
				<article>
					<h4>Permalinks</h4>
					<Link to="/about">About</Link>
					<Link to="/plans">Plans</Link>
					<Link to="/trainers">Trainers</Link>
					<Link to="/gallery">Gallery</Link>
					<Link to="/contact">Contact</Link>
				</article>
				<article>
					<h4>Insights</h4>
					<Link to="/s">Blog</Link>
					<Link to="/s">Case Studies</Link>
					<Link to="/s">Events</Link>
					<Link to="/s">Communities</Link>
					<Link to="/constact">FAQs</Link>
				</article>
				<article>
					<h4>Get In Touch</h4>
					<Link to="/contact">Plans</Link>
					<Link to="/s">Trainers</Link>
				</article>
			</div>
			<div class="footer__copyright">
    <div>
        <small><a href="https://pankaj-fwd.github.io/me/" target="_blank">Developed by - Pankaj Pal ❤</a></small>
    </div>
    <div>
        <small>© All rights reserved! 2023-2024</small>
    </div>
</div>
		</footer>
	);
};

export default Footer;
