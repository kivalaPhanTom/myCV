import styles from './Loading.module.scss'

function Loading() {
  return (
    <div className={styles["loading-screen"]}>
        <div className={styles["loading"]}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
  )
}

export default Loading
