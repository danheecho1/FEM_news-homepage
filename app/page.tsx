import Image from 'next/image'
import styles from './page.module.css'
import { Navbar } from '@/components'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
    </div>
  )
}
