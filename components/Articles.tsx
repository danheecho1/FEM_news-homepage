"use client";

import React from 'react'
import styles from "./Articles.module.css"
import Image from "next/image"
import retro from "../public/image-retro-pcs.jpg"
import laptops from "../public/image-top-laptops.jpg"
import gaming from "../public/image-gaming-growth.jpg"

const Articles = () => {
  const nonFunctionalAlert = (e:React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		alert("This link/button is not functional!");
	}
  return (
    <section className={styles.articlesContainer}>
      <div className={styles.articlesContainer__individualArticleDiv}>
        <Image src={retro} alt="Retro PC" />
        <div className={styles.articlesContainer__individualArticleDiv__rightSideDiv}>
          <h2 className={styles.articlesContainer__individualArticleDiv__rightSideDiv__number}>01</h2>
          <a href="#" onClick={nonFunctionalAlert} className={styles.articlesContainer__individualArticleDiv__rightSideDiv__title}>Reviving Retro PCs</a>
          <p className={styles.articlesContainer__individualArticleDiv__rightSideDiv__description}>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className={styles.articlesContainer__individualArticleDiv}>
        <Image src={laptops} alt="Laptops" />
        <div className={styles.articlesContainer__individualArticleDiv__rightSideDiv}>
          <h2 className={styles.articlesContainer__individualArticleDiv__rightSideDiv__number}>02</h2>
          <a href="#" onClick={nonFunctionalAlert} className={styles.articlesContainer__individualArticleDiv__rightSideDiv__title}>Top 10 Laptops of 2022</a>
          <p className={styles.articlesContainer__individualArticleDiv__rightSideDiv__description}>Our best picks for various needs and budgets.</p>
        </div>
      </div>
      <div className={styles.articlesContainer__individualArticleDiv}>
        <Image src={gaming} alt="Gaming" />
        <div className={styles.articlesContainer__individualArticleDiv__rightSideDiv}>
          <h2 className={styles.articlesContainer__individualArticleDiv__rightSideDiv__number}>03</h2>
          <a href="#" onClick={nonFunctionalAlert} className={styles.articlesContainer__individualArticleDiv__rightSideDiv__title}>The Growth of Gaming</a>
          <p className={styles.articlesContainer__individualArticleDiv__rightSideDiv__description}>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </section>
  )
}

export default Articles