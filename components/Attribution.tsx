import React from "react";
import styles from "./Attribution.module.css"

const Attribution = () => {
	return (
		<footer className={styles.attribution}>
			Challenge by{" "}
			<a
				href="https://www.frontendmentor.io?ref=challenge"
				target="_blank">
				Frontend Mentor
			</a>
			. Coded by <a href="https://dannycho.dev">Danny Cho</a>.
		</footer>
	);
};

export default Attribution;
