import styles from './page.module.css'
import { Navbar, Main, News, Articles, Attribution } from '@/components'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Main />
      <News />
      <Articles />
      <Attribution />
    </div>
  )
}
