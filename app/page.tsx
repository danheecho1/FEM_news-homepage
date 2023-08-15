import styles from './page.module.css'
import { Navbar, Content, Attribution } from '@/components'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Content />
      <Attribution />
    </div>
  )
}
