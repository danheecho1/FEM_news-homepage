"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.svg";
import menuClose from "../public/icon-menu-close.svg";
import menuOpen from "../public/icon-menu.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
	const navMenus = useRef<HTMLUListElement>(null);
	const [menuOpenStatus, setMenuOpenStatus] = useState(false);
	const toggleMenu = () => {
		setMenuOpenStatus(!menuOpenStatus);
	};
	useEffect(() => {
		if (menuOpenStatus) {
			navMenus.current?.classList.add(styles["active"]);
		} else {
			navMenus.current?.classList.remove(styles["active"]);
		}
	}, [menuOpenStatus]);
	return (
		<header className={styles.headerContainer}>
			<Image src={Logo} alt="Logo" />
			<nav>
				<Image
					src={menuOpenStatus ? menuClose : menuOpen}
					alt="Navigation menu"
					onClick={toggleMenu}
					className={styles.headerContainer__navBar__menu}
				/>
				<ul ref={navMenus} className={styles.headerContainer__nav__ul}>
					<li className={styles.headerContainer__nav__ul__li}>
						<Link href="#">Home</Link>
					</li>
					<li className={styles.headerContainer__nav__ul__li}>
						<Link href="#">New</Link>
					</li>
					<li className={styles.headerContainer__nav__ul__li}>
						<Link href="#">Popular</Link>
					</li>
					<li className={styles.headerContainer__nav__ul__li}>
						<Link href="#">Trending</Link>
					</li>
					<li className={styles.headerContainer__nav__ul__li}>
						<Link href="#">Categories</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
