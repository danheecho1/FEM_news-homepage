import React from "react";
import styles from "./News.module.css";

const News = () => {
	return (
		<section className={styles.newsContainer}>
			<h2 className={styles.newsContainer__heading}>New</h2>
			<div className={styles.newsContainer__newsItemsDiv}>
				<div className={styles.newsContainer__newsItemsDiv__individualNewsItemDiv}>
					<h3 className={styles.newsContainer__newsItemsDiv__individualNewsItemDiv__heading}>Hydrogen VS Electric Cars</h3>
					<p className={styles.newsContainer__newsItemsDiv__individualNewsItemDiv__paragraph}>Will hydrogen-fueled cars ever catch up to EVs?</p>
				</div>
				<hr />
				<div className={styles.newsContainer__newsItemsDiv__individualNewsItemDiv}>
					<h3 className={styles.newsContainer__newsItemsDiv__individualNewsItemDiv__heading}>The Downsides of AI Artistry</h3>
					<p className={styles.newsContainer__newsItemsDiv__individualNewsItemDiv__paragraph}>
						What are the possible adverse effects of on-demand AI
						image generation?
					</p>
				</div>
				<hr />
				<div className={styles.newsContainer__newsItemsDiv__individualNewsItemDiv}>
					<h3 className={styles.newsContainer__newsItemsDiv__individualNewsItemDiv__heading}>Is VC Funding Drying Up?</h3>
					<p className={styles.newsContainer__newsItemsDiv__individualNewsItemDiv__paragraph}>
						Private funding by VC firms is down 50% YOY. We take a
						look at what that means.
					</p>
				</div>
			</div>
		</section>
	);
};

export default News;
