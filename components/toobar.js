import { useRouter } from "next/router"
import styles from "../styles/Toobar.module.scss"

const toobar = () => {
  const router = useRouter()

  return (
    <div className={styles.main}>
      <div onClick={() => router.push("/")}>Home</div>
      <div onClick={() => router.push("/feed/1")}>Feed</div>
      <div onClick={() => router.push("/eom")}>EOM</div>
      <div onClick={() => window.location.href ='https://twitter.com/chtslk'}>Twitter</div>
      {/* <Link href="/">
        <a>Home</a>
      </Link> */}
    </div>
  )
}

export default toobar
