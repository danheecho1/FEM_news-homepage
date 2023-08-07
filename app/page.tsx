import Image from 'next/image'
import styles from './page.module.css'
import { Navbar, Main, News } from '@/components'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Main />
      <News />
    </div>
  )
}
