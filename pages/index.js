import Head from 'next/head'
import Image from 'next/image'
import TopBar from '../components/top-bar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Valentin Furmanek</title>
      </Head>
      <TopBar />
    </div>
  )
}
