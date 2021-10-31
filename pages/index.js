import Head from 'next/head'
import TopBar from '../components/top-bar'
import Home from '../components/home'
import styles from '../styles/Home.module.css'

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Valentin Furmanek</title>
      </Head>
      <TopBar />
      <Home />
    </div>
  )
}
