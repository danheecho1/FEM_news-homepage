"use client";

import React from "react";
import Image from "next/image";
import frontPageImage from "../public/image-web-3-mobile.jpg";
import styles from "./Main.module.css";

const Main = () => {
	const nonFunctionalAlert = (e:React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		alert("This link/button is not functional!");
	}
	return (
		<section className={styles.mainContainer}>
			<Image
				src={frontPageImage}
				alt="Web 3"
				style={{ maxWidth: "100%", height: "auto" }}
			/>
			<div className={styles.mainContainer__textDiv}>
				<h1 className={styles.mainContainer__textDiv__heading}>The Bright Future of Web 3.0?</h1>
				<p className={styles.mainContainer__textDiv__paragraph}>
					We dive into the next evolution of the web that claims to
					put the power of the platforms back into the hands of the
					people. But is it really fulfilling its promise?
				</p>
				<a href="#" onClick={nonFunctionalAlert} className={styles.mainContainer__textDiv__button}>READ MORE</a>
			</div>
		</section>
	);
};

export default Main;
