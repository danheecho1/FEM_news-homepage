import React from 'react'
import styles from "./Articles.module.css"
import Image from "next/image"
import retro from "../public/image-retro-pcs.jpg"

const Articles = () => {
  return (
    <section className={styles.articlesContainer}>
      <div className={styles.articlesContainer__individualArticleDiv}>
        <Image src={retro} alt="Retro PC" />
        <div>
          <h2>01</h2>
          <h3>Reviving  Retro PCs</h3>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className={styles.articlesContainer__individualArticleDiv}>
        <Image src={retro} alt="Retro PC" />
        <div>
          <h2>01</h2>
          <h3>Reviving  Retro PCs</h3>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className={styles.articlesContainer__individualArticleDiv}>
        <Image src={retro} alt="Retro PC" />
        <div>
          <h2>01</h2>
          <h3>Reviving  Retro PCs</h3>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
    </section>
  )
}

export default Articles