import React from "react";
import { Main, News, Articles } from "@/components";
import styles from "./Content.module.css"

const Content = () => {
	return (
		<div className={styles.contentContainer}>
			<Main />
			<News />
			<Articles />
		</div>
	);
};

export default Content;
