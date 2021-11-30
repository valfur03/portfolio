import Head from 'next/head'
import TopBar from '../components/top-bar'
import WIP from '../components/wip'
import Home from '../components/home'
import AboutMe from '../components/about-me'
import styles from '../styles/Home.module.css'

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Valentin Furmanek</title>
      </Head>
      <TopBar />
      <WIP></WIP>
      <main>
        <Home />
        <AboutMe />
      </main>
    </div>
  )
}
