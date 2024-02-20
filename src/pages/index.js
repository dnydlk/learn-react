import styles from "@/styles/Home.module.css"
// import Component from "./components/artistsArr"
import Component from "./qcomps/arrObj"

export default function Home() {
  return (
    <div className={styles.main}>
      <Component />
    </div>
  )
}
