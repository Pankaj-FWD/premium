import { useState ,useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
// NavLink comes with an isactive prop which we can use to detect which page we on
// so we can have a special style for that link
import React from "react";
import Logo from "../../images/logo.png";
import { links } from "../../data";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";
import "../navbar.css";
import { getUserFromLocalStorage, removeUserFromLocalStorage } from "../../utills/authUtils";

const MemberNavbar = () => {
	const [isNavShowing, setIsNavShowing] = useState(false);
	const [userName, setUserName] = useState('');

useEffect(() => {
	const user = getUserFromLocalStorage();
	setUserName(user)
}, [])



	const handleNavToggle = () => {
		return setIsNavShowing((prevVAlue) => {
			return !prevVAlue;
		});
	};

	const handleLogout = () => {
		removeUserFromLocalStorage();
		window.location.href = "/login";
	  };
	  

	return (
		<nav>
			<div className="container nav__container">
				<Link to="/" className="logo" onClick={handleNavToggle}>
					<img src={Logo} alt="Nav-logo" />
				</Link>
				<ul
					className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
				>
					{/* Destructure the links array of object from the links to get each item */}
					{links.map(({ name, path }, index) => {
						return (
							<li key={index}>
								<NavLink
									to={path}
									className={({ isActive }) => (isActive ? "active-nav" : "")}
									onClick={handleNavToggle}
								>
									{name}
								</NavLink>
							</li>
						);
					})}
					<li>
					{userName?<NavLink
									to='#'
									className={({ isActive }) => (isActive ? "active-nav" : "")}
									onClick={handleLogout}
								>
									Logout
								</NavLink>:<NavLink
									to='/login'
									className={({ isActive }) => (isActive ? "active-nav" : "")}
									onClick={handleNavToggle}
								>
									Login
								</NavLink>}
					</li>
				</ul>
				<button onClick={handleNavToggle} className="nav__toggle-btn">
					{isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
				</button>
			</div>
		</nav>
	);
};

export default MemberNavbar;
