"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../public/logo.svg";
import menuClose from "../public/icon-menu-close.svg"
import menuOpen from "../public/icon-menu.svg"
import styles from "./Navbar.module.css"

const Navbar = () => {
	const [menuOpenStatus, setMenuOpenStatus] = useState(false)
	const toggleMenu = () => {
		setMenuOpenStatus(!menuOpenStatus);
	}
	return (
		<header className={styles.headerContainer}>
			<Image src={Logo} alt="Logo" />
			<nav>
				<Image src={menuOpenStatus? menuClose : menuOpen} alt="Navigation menu" onClick={toggleMenu} className={styles.headerContainer__navBar__menu} />
			</nav>
		</header>
	);
};

export default Navbar;
