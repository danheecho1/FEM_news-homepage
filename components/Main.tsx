"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import frontPageImage from "../public/image-web-3-mobile.jpg";
import frontPageImageDesktop from "../public/image-web-3-desktop.jpg";
import styles from "./Main.module.css";

const Main = () => {
	const nonFunctionalAlert = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		alert("This link/button is not functional!");
	};

	const [mobileView, setMobileView] = useState<boolean | null>(null);

	useEffect(() => {
		const handleResize = () => {
			const viewportWidth = window.innerWidth;
			if (viewportWidth < 768) {
				setMobileView(true);
			} else {
				setMobileView(false);
			}
		};
		handleResize();
		window.addEventListener("resize", handleResize);
	}, []);

	return (
		<section className={styles.mainContainer}>
			{mobileView !== null && (
				<Image
					src={mobileView ? frontPageImage : frontPageImageDesktop}
					alt="Web 3"
					style={{ maxWidth: "100%", height: "auto" }}
				/>
			)}
			<div className={styles.mainContainer__textDiv}>
				<h1 className={styles.mainContainer__textDiv__heading}>
					The Bright Future of Web 3.0?
				</h1>
				<p className={styles.mainContainer__textDiv__paragraph}>
					We dive into the next evolution of the web that claims to
					put the power of the platforms back into the hands of the
					people. But is it really fulfilling its promise?
				</p>
				<a
					href="#"
					onClick={nonFunctionalAlert}
					className={styles.mainContainer__textDiv__button}
				>
					READ MORE
				</a>
			</div>
		</section>
	);
};

export default Main;
