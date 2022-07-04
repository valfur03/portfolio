import styles from '../styles/Home.module.css'
import KevinGif from '../components/KevinGif'

export default function Home() {
  return (
    <div className={styles.container}>
	  <h1 className={styles.title}>Summer break</h1>
	  <KevinGif />
	  <p className={styles.paragraph}>I’ll be back shortly... But the Pi needs to rest a little bit. You can still <a href="https://valfur.fr">check out my portfolio</a>.
See you soon!</p>
    </div>
  )
}
