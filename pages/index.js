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
	  	<link rel="manifest" href="/site.webmanifest" />
	  	<meta name="theme-color" content="#17a398" />
	  	<meta name="application-name" content="Valfur" />
	  	<link rel="shortcut icon" href="/favicon.ico" />
	  	<meta name="apple-mobile-web-app-title" content="Valfur" />
	  	<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
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
